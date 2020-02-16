# ИФК-тренинг 2020

### Деплой
**https://web-develop-cg.now.sh/**

*html файлы --> static/*

### Используемые технологии

**Верстка** - Less, Autoprefixer, clean-css

**Javascript** - ES5/ES6+, Babel\
Используется модульная архитектура, синтаксис 2015+ (напр. стрелочная нотация функций).

**Библиотеки** - JQuery 2.3.1, Slick, Fontawesome

**Используемое API** - Google Maps, Google Forms

**Operations** - используется бесплатный CD хостинг https://zeit.co\
При каждом коммите в ветку develop происходит деплой статического сайта на сервис.

**Build** - task-manager Gulp v4\
Компиляция less-стилей, транспилляция js кода через babel, минимфикация изображений производятся с
помощью плагинов gulp и прописанных задач, выполняющихся при сборке проекта.\
Также предусмотрен dev-сервер для отладки

**Прочее** - для обработки изображений использовался Photoshop CC 2019, для улучшения качества исходных
схем компоновок самолетов было использовано ПО bigjpg на основе нейросети. 

### Особенности разработки

**Стек** - в проекте используется пакетный менеджер npm со следующим стеком разработки:

prettier - автоматическое форматирование кода в соответствии с код стайлом проекта\
husky - использование git hooks, в частности pre commit\
postcss-cli + autoprefixer - постпроцессор CSS\
commitizen + commitlint - линтер коммитов*\
gulp и gulp плагины - таск менеджер для сборки проекта

**Плагины gulp:**

style:
- gulp-less - компилятор less
- gulp-autoprefixer - проставление браузерных префиксов в css
- gulp-clean-css - сжатие и оптимизация css

js:
- browserify - объединение модулей
- babelify - транспиляция через babel
- gulp-uglify - сжатие js

images:
- gulp-imagemin - сжатие изображений
- imagemin-pngquant - минификация размера png путем изменения цветовой схемы

Прочее:
- vinyl-source-stream - см. ниже
- vinyl-buffer - совместно с предыдущим обеспечивает поток в контексте gulp (используется совместно с browserify)
- gulp-rename - задание пользовательского имени результируюзего файла/файлов сборки
- gulp-sourcemaps - создание .map файлов для интерпретации сжатых css и js в dev tools браузра
- gulp-cache - в контексте проекта - кэширование минифицированных изображений, с целью оптимизации повторных сборок
- browser-sync - dev-сервер

*проект использует методологию стилей коммитов **Conventional Commits**\
Пример использования в статье Яндекса на хабре:
https://habr.com/ru/company/yandex/blog/431432/

Текущий стек позволяет упростить командную работу, приведя проект к единому код- и коммит-стайлу, а
также автоматизируя деплой и некоторые скрипты.

### Окружение и команды

Для использования стека и возможности локально запускать dev-сервер, необходим пакетный менеджер
 NodeJs - **npm**.

После скачивания репозитория выполнить:

- `npm install` - для установки всех необходимых пакетов и зависимостей.

- `npm run build` - получение папки `build/` со всеми конечными production файлами

- `npm start` или `gulp` - запуск dev-сервера

- `git cz` - для вызова интерактивного CLI меню, которое поможет заполнить сообщение
коммита в соответствии с нужным стилем на первых порах.\
!*Ваши коммит-сообщения проверяются утилитой **commitlint** на соответствие стилю **Conventional Commits**.*

-----------------------------
### Команда:
**Косенков Александр** - `https://github.com/SoulPhazed`\
**Гольцов Илья** - `https://github.com/Stranger488`\
**Гасанов Ислам** - `https://github.com/mafrien`

Руководитель проекта - **Витюков Федор Андреевич**
