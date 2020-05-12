'use strict';

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');
const rigger = require('gulp-rigger');
const browserSync = require('browser-sync').create();

const del = require('del');

const path = {
	buildSrc: './build',
	build: {
		html: 'build',
		js: 'build/js',
		css: 'build/css',
		img: 'build/img',
		fonts: 'build/fonts',
		vendor: 'build/vendor',
	},
	src: {
		html: 'static/*.html',
		js: 'js/main.js',
		jsPartials: 'js/*.js',
		lessMain: 'less/main.less',
		lessPartials: 'less/*.less',
		fonts: 'fonts/**/*.*',
		img: 'img/**/*.*',
		vendor: 'vendor/**/*.*',
	},
};

const config = {
	server: {
		baseDir: './build',
		index: 'main.html'
	},
	host: '0.0.0.0',
	port: 9000,
	logPrefix: 'IFK-training',
};

gulp.task('clean', () => {
	return del(path.buildSrc);
});

gulp.task('build:js', () => {
	return browserify({
		entries: path.src.js,
	})
		.transform(babelify, {
			presets: [
				'@babel/preset-env',
			],
		})
		.bundle()
		.pipe(source(path.src.js))
		.pipe(rename({
			dirname: '',
			extname: '.min.js',
		}))
		// buffer - работает в паре с source - для поддержки стримов gulp,
		// так как начали pipe мы не с gulp.src
		.pipe(buffer())
		.pipe(sourcemaps.init({
			loadMaps: true,
		}))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(path.build.js));
});

gulp.task('build:less', () => {
	return gulp.src(path.src.lessMain)
		.pipe(sourcemaps.init({
			loadMaps: true,
		}))
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(cleanCSS({
			compatibility: "ie9"
			// По желанию можно применить дополнительные уровни оптимизации
			// Читать документацию по clean-css
		}))
		.pipe(rename({
			dirname: '',
			extname: '.min.css',
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(path.build.css))
		.pipe(browserSync.stream());
});

gulp.task('build:html', () => {
	return gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html));
});

gulp.task('build:img', () => {
	return gulp.src(path.src.img)
	// cache нужен, так как операция минификации слишком долгая
		.pipe(cache(imagemin([
			pngquant({
				quality: [0, 0.5]
			}),
			], {
			interlaced: true
		})))
		.pipe(gulp.dest(path.build.img));
});

gulp.task('cache:clear', (done) => {
	// Очистка кэша imagemin
	cache.clearAll();
	done();
});

gulp.task('build:fonts', () => {
	return gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts));
});

gulp.task('build:vendor', () => {
	return gulp.src(path.src.vendor)
		.pipe(gulp.dest(path.build.vendor));
});

gulp.task('server', () => {
	browserSync.init(config);
});

const browserReload = (done) => {
	browserSync.reload();
	done();
};

gulp.task('watch', gulp.parallel('server', () => {
	gulp.watch(path.src.lessPartials, gulp.series('build:less'));
	gulp.watch(path.src.jsPartials, gulp.series('build:js', browserReload));
	gulp.watch(path.src.html, gulp.series('build:html', browserReload));
}));

// Пример того же, что ниже, через плагин gulp4-run-sequence
// (callback) => {
// 	// callback необходимо прокидывать как знак того, что sequence закончена
// 	runSequence('clean', ['build:less', 'build:js', 'build:html', 'build:img', 'build:fonts', 'build:vendor'], callback);
// }

gulp.task('build',
	gulp.series('clean', gulp.parallel(
		['build:less', 'build:js', 'build:html', 'build:img', 'build:fonts', 'build:vendor']
	))
);

// gulp.task(name, deps, func) was replaced by gulp.task(name, gulp.{series|parallel}(deps, func))
// Можно передавать как массив, так и последовательные параметры
gulp.task('default', gulp.series(['build', 'watch']));
