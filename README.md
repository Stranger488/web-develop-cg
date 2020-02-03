# ИФК-тренинг 2020

### Деплой
**https://web-develop-cg.now.sh/**

*html файлы --> static/*

### Используемые технологии

**Верстка** - Less, Autoprefixer\
Для компиляции less кода были использованы встроенные препроцессоры CSS в среды разработки IDE Webstorm и VS.

**Javascript** - ES5+\
Используется модульная архитектура, стрелочная нотация функций.

**Библиотеки** - JQuery 2.3.1, Slick, Fontawesome

**Используемое API** - Google Maps, Google Forms

**DevOps** - используется бесплатный devops хостинг https://zeit.co\
При каждом коммите в ветку develop происходит деплой статического сайта на сервис.

**Прочее** - для обработки изображений использовался Photoshop CC 2019, для улучшения качества исходных
схем компоновок самолетов было использовано ПО bigjpg на основе нейросети. 

### Особенности разработки

**Стек** - в проекте используется пакетный менеджер npm со следующим стеком разработки:

prettier - автоматическое форматирование кода в соответствии с код стайлом проекта\
husky - использование git hooks, в частности pre commit\
postcss-cli + autoprefixer - постпроцессор CSS\
commitizen + commitlint - линтер коммитов*

*проект использует методологию стилей коммитов **Conventional Commits**

Пример использования в статье Яндекса на хабре:
https://habr.com/ru/company/yandex/blog/431432/

Текущий стек позволяет упростить командную работу, приведя проект к единому код- и коммит-стайлу, а
также автоматизируя деплой и некоторые скрипты.

### Окружение и команды

Для использования преимуществ автоматизации проверки код-стайла и стилей
коммитов необходим пакетный менеджер NodeJs **npm**.

После скачивания репозитория выполнить:

- `npm install` - для установки всех необходимых пакетов и зависимостей.

Ваши коммит сообщения проверяются утилитой **commitlint** на соответствие стилю **Conventional Commits**.

- `git cz` - для вызова интерактивного CLI меню, которое поможет заполнить сообщение
коммита в соответствии с нужным стилем на первых порах.

- `npm run postcss` - запуск постпроцессора.

- `npm run build` - получение папки `deploy/` со всеми конечными production файлами

-----------------------------
###Команда:
**Косенков Александр** - `https://github.com/SoulPhazed`\
**Гольцов Илья** - `https://github.com/Stranger488`\
**Гасанов Ислам** - `https://github.com/mafrien`

Руководитель проекта - **Витюков Федор Андреевич**
