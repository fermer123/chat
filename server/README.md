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
```

## Для запуска контейнера

```
docker run -d -p 3000:3000 --name server server
```
