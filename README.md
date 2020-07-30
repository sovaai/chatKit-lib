# Table of contents
Библиотека состоит из следующих компонентов:
* **ckAPIMethods** - методы, влияющие на поведение UI или взаимодействие UI;
* **CkComponents** - UI составляющие виджета, представляющие собой реакт-компоненты;
* **ckStore** - управление контентом.
Подробное описание библиотеки представлено на станице ниже.

# Install
Для установки библиотеки небходимо ввести в терминал следующую команду:
```
$ npm i --save Sova-Chat-Kit
```

# Quick start
Для быстростого старта и возможности вносить изменения в какой-либо компонент библиотеки, введите в терминал следующую команду:
In your App.js file:  
```
import {CkComponents} from 'Sova-Chat-Kit'
...
<CkComponents.ChatIt />
...
```
Команда импортирует на ПК дефолтный виджет со всеми компонентами. 
 
 
 # Описание библиотеки
 ## ckAPIMethods
* [recieveMessageAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/recieveMessageAPI.md "Read more") (Add a text messages to STORE)
* [sendMessageAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/sendMessageAPI.md "Read more") (Send messages to the module to call request)
* [notificationsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/notificationsAPI.md "Read more") (Меняет сеттинги компонентов в STORE)
* [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "Read more") (Edit the widget theme or individual component)
* [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "Read more") (меняет сеттинги компонентов в STORE)
* [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "Read more") (меняет картинки в виджете)
* [modulesAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/modulesAPI.md "Read more") (подключение модулей)
* [languageAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI%20.md "Read more") (настройки языковых пакетов)
 
 
 ## CkComponents
 В виджете используются следующие react-компоненты:
* [Badge](https://github.com/sovaai/chatKit/blob/master/docs/components/badge.md "Read more")
* [Message](https://github.com/sovaai/chatKit/blob/master/docs/components/message.md "Read more")
* [Dialog](https://github.com/sovaai/chatKit/blob/master/docs/components/dialog.md "Read more")
* [Header](https://github.com/sovaai/chatKit/blob/master/docs/components/header.md "Read more")
* [Rate](https://github.com/sovaai/chatKit/blob/master/docs/components/rate.md "Read more")
* [Sender](https://github.com/sovaai/chatKit/blob/master/docs/components/sender.md "Read more")
 
 ## ckStore
1. **messages**  (ключ, под которым хранится история сообщений как пользователя, так и приходящие ответы)
* history (массив всех сообщений, которые отображаются в dialog)
* announcements (доступные анонсы)
* lastResponseMessage (последнее сообщение, которое пришло с бэка)
* lastUserMessage (последнее сообщение от пользователя)

2. **modules**  (ключ, под которым хранится информация, связанная с подключенными модулями)
* active (ck module, который используется в данный момент)
* stack (хранилище всех зарегистрированных модулей)

3. **settings** (ключ, под которым хранится информация о выбранных настройках диалогового окна, его состояние)
* media
   * avatar (путь до картинки)
   * icons (настройка иконок)
   * steakers
   
4 **language** (настройка языковых пакетов)
* active (активный языковой пакет; пакет, который используется в dialog)
* stack (хранилище всех зарегистрированных языковых пакетов) 

5. **styles** (ключ, под которым хранятся стилевые настройки диалогового окна и отдельных компонентов)
* active (активная тема)
* stack (хранилище всех тем, доступных для использования)

6. **notifications** (ключ, под которым хранятся нотификации)
* settings
* revision
* timer1
* timer2
* disablePeriod
* messages (перечень всхе сообщений, которые будут отображаться в виджете в порядке очередности)

7. **clientConfig** (ключ, под которым хранятся верхнеуровневые настройки виджета)
* info

8. **managment** (ключ, под которым хранятся настройки виджета)
* common (общие настройки)
* chatIsOpen (состояние виджета (раскрыт/находится в режиме бейджа))
* showNotification (показывать/не показывать нотификации)
* showMsLoad (показывать/не показывать ползунок "загрузки" сообщений)
* showRate (показывать/не показывать рейтинг)
* components (перечень компонентов, из которых состоит виджет)
