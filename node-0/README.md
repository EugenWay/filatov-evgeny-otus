# Node Server

Реализовать скрипт request для тестирования веб сервера
Создать локальный веб сервер `server`, отвечающий на запросы каждые 100ms

Создать скрипт `request`, принимающий на вход 
- количество запросов `N`
- тип запросов - параллельный или последовательный

Скрипт `request` должен отправлять `N` последовательных или параллельных `HTTP` запросов к локальному серверу `server`

# How to use!
    
For run server in http://localhost:3000 complete command in Node directory.

```sh
$ node server
```

For send request to server:

```sh
$ node client numder --typeOfRequest
```
`numder` - number of requests
`--typeOfRequest` - type of reqests (parallels or serials)

# Examples!

Serial request

```sh
$ node client 50 --serial
```

Parallel request

```sh
$ node client 50 --parallel
```