# Example Corp SPA (DRF + React)

Пример корпоративного сайта с фронтендом на React.

# Установка

Бэкенд

```bash
pipenv install
cp example.env .env
docker-compose up -d
python3 backend/manage.py makemigrations
python3 backend/manage.py migrate
python3 backend/manage.py createsuperuser
```

Фронтенд

```bash
cd frontend-react
yarn
yarn start
```

# Запуск

Бэкенд

```bash
python3 backend/manage.py runserver
```

Фронтенд

```bash
cd frontend-react
yarn start
```

# Использование

Заполнить **Структуру страниц** и **Пункты меню** в административной панели.