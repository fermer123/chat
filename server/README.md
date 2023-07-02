# Использование

## Установите зависимости

```
npm install
# or
yarn
```

# Для проверки того что [сервер запущен](http://localhost:3000/) введите

```
npm run test
# or
yarn test
```

# Для запуска [сервера](http://localhost:3000/) введите

```
npm run dev
# or
yarn dev
```

# Docker

## Для создания билда введите

```
docker build . -t server
# or
docker pull fermer123/server:latest
```

## Для запуска контейнера

```
docker run -d -p 3000:3000 --name server --rm server
# or
docker run -d -p 3000:3000 --name server --rm fermer123/server
# or
make run
```
