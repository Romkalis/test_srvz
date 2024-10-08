
Документация к проекту "Форма авторизации"
Описание проекта
Этот проект является тестовым заданием, целью которого является создание формы авторизации с использованием следующих технологий:

React: для построения пользовательского интерфейса.
TypeScript: для обеспечения статической типизации.
Vite: для быстрой сборки и разработки проекта.
Formik: для управления формами.
MobX: для управления состоянием приложения.
Установка и запуск проекта
1. Клонирование репозитория
   Сначала клонируйте репозиторий с проектом на ваш локальный компьютер:

    git clone https://github.com/Romkalis/test_srvz
2. Установка зависимостей
   Перейдите в директорию проекта и установите все необходимые зависимости:
    npm install
3. Запуск проекта в режиме разработки
   Для запуска проекта в режиме разработки используйте следующую команду:
    npm run dev
Это откроет приложение в браузере, и оно будет автоматически обновляться при каждом сохранении изменений в коде.
4. Сборка проекта
   Для сборки проекта используйте команду:
npm run build
Собранный проект будет помещен в директорию dist.

5. Предпросмотр сборки
   Для предварительного просмотра собранного проекта:


Структура проекта   

Директории: 
src/: Главная директория с исходным кодом.
components/: Компоненты React.
store/: Модели состояния, управляемые MobX.
*.modules.css: Стили CSS, находятся рядом с родительским компонентом.
App.tsx: Главный компонент приложения.
main.tsx: Точка входа в приложение.

Основные файлы:

App.tsx - Основной компонент
LoginForm.tsx: Компонент формы, содержащий форму авторизации.
LoginFormState.tsx: MobX состояние для управления данными формы.


Используемые библиотеки

Formik — это библиотека для управления формами в React-приложениях. В данном проекте она используется для управления состоянием формы авторизации, валидации полей и обработки отправки формы.


MobX — это библиотека для управления состоянием в React-приложениях. В данном проекте она используется для хранения и управления состоянием формы авторизации.

Основной функционал - 
Форма авторизации
Форма авторизации содержит два поля:

Логин (email) \ Пароль

После ввода данных и нажатия на кнопку "Send", данные отправляются на сервер (имитация с помощью setTimeout, console.log). Если отправка успешна, перенаправляет на страницу приветствия.

Взаимодействие с MobX
Состояние формы (логин, пароль) хранится в MobX-состоянии, управляется через методы setLogin, setPassword и валидируется через setIsValid.

Обработка отправки формы:
При отправке формы выполняются следующие действия:

Проверка введенных данных (с помощью Formik).
Обновление состояния в MobX.
Отправка данных на сервер (имитация).

На странице приветствия реализован функционал Сброс формы.

Команды для разработки:
npm run dev: Запуск проекта в режиме разработки.
npm run build: Сборка проекта.
npm run preview: Предпросмотр собранного проекта.
npm run lint: Проверка кода на соответствие стандартам и выявление ошибок.


Заключение:
Проект представляет собой простую форму авторизации, реализованную с использованием современных технологий. Структура кода и использование библиотек облегчают понимание и расширение функционала приложения.
