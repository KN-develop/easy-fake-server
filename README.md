# Easy Fake Server [![Codacy Badge](https://app.codacy.com/project/badge/Grade/5eb8790e140b45b3ae8df8b158226462)](https://www.codacy.com/gh/KN-develop/easy-fake-server/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=KN-develop/easy-fake-server&amp;utm_campaign=Badge_Grade)

Сервер фейковых данных на ноде, собранный на коленке.
1. npm install
2. npm run start

- В конфиге можно настроить какие то параметры, пока только порт и задержка ответа в милисекундах.
- Вся фигня по разбору строки запроса пока простейшим образом реализована в скрипте routing.js
- Фейковые данные должны формироваться контроллерами, в папке fake, там все просто и понятно
<table>
<thead>
<tr>
<th>/api</th>
<th>/autolux</th>
<th>/auth</th>
<th>/cards</th>
<th>/add</th>
</tr>
</thead>
<tr>
<td>папка api</td>
<td>проект</td>
<td>модуль</td>
<td>имя контроллера, будет преобразовано в CardsController.js</td>
<td>имя метода, будет преобразовано в addAction. Если не задано, то будет вызван indexAction контроллера. Если тут цифра, то будет вызван oneAction контроллера. Если метод в контроллере не будет найден, то будет вызван метод indexAction базового контроллера</td>
</tr>
</table>

Метод контроллера должен возвращать либо JSON строку, либо JS объект.
Формат JS объекта:
- headers = [['name', 'value']] - массив заголовков
- statusCode = 200 - понятно
- body = null - тело ответа в любом формате

