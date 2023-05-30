# Тестовое задание Clocks App

Для запуска проекта выполнить:

### `npm i`
### `npm run start`

## Использовались следующие технологии:

Typescript
React
Redux-Toolkit

Задачу разделил на несколько этапов:
1. Проанализировал и понял, что необходимо сделать вью-компонент, на котором будет размещаться компоненты часов. 
Каждый из компонентов часов включает в себя аналоговый вариант, цифровой вариант и меню выбора часового пояса.
2. Для получения списка часовых поясов с сервера был написан провайдер. Для операций со список были добавлены модели.
3. Для хранения списка часовых поясов был использован стор редакса - чтобы из каждого компонента часов получить доступ к этому списку. Для создания стора, редьюсера и экшенов использовался Redux-Toolkit.
4. Во вью компоненте получается дата и время, для обновления времени был создан setInterval
5. Использовал функциональные компоненты совместно с хуками 