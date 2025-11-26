# Инструкция по настройке Telegram трекера привычек

## 1. Установка зависимостей

Зависимости уже установлены. Если нужно переустановить:

```bash
npm install
```

## 2. Настройка базы данных

### Шаг 1: Создайте базу данных в Supabase

1. Зайдите на [supabase.com](https://supabase.com)
2. Создайте новый проект
3. Скопируйте URL подключения к базе данных и API ключи

### Шаг 2: Настройте переменные окружения

Создайте файл `.env` в корне проекта:

```env
# Database (из Supabase -> Settings -> Database -> Connection string)
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# Supabase (из Supabase -> Settings -> API)
NEXT_PUBLIC_SUPABASE_URL="https://[YOUR-PROJECT-REF].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Telegram Bot (опционально, для проверки данных и отправки уведомлений)
TELEGRAM_BOT_TOKEN="your-telegram-bot-token"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:80"
```

### Шаг 3: Примените миграции Prisma

```bash
# Создайте миграцию
npx prisma migrate dev --name init

# Или просто примените схему без миграции
npx prisma db push

# Сгенерируйте Prisma Client
npx prisma generate
```

## 3. Создание Telegram бота

1. Откройте [@BotFather](https://t.me/botfather) в Telegram
2. Создайте нового бота командой `/newbot`
3. Следуйте инструкциям и получите токен
4. Настройте Menu Button для запуска вашего приложения:
   ```
   /setmenubutton
   Выберите вашего бота
   Введите URL: https://your-domain.com (или ngrok URL для разработки)
   ```

## 4. Запуск проекта

```bash
# Development режим
npm run dev

# Production build
npm run build
npm start
```

Приложение будет доступно по адресу `http://localhost:80`

## 5. Тестирование в локальной разработке

Для тестирования Telegram Mini App локально используйте ngrok:

```bash
# Установите ngrok
# https://ngrok.com/

# Запустите туннель
ngrok http 80

# Используйте полученный URL в настройках бота
```

## Структура проекта

```
app/
├── api/
│   └── auth/
│       └── telegram/         # API для аутентификации Telegram пользователей
├── components/
│   └── AuthProvider.tsx      # Провайдер аутентификации
├── hooks/
│   └── useAuth.tsx          # Хук для работы с аутентификацией
├── lib/
│   ├── prisma.ts            # Prisma клиент
│   ├── supabase.ts          # Supabase клиент
│   └── telegram.ts          # Утилиты для работы с Telegram
└── useTg.tsx                # Контекст Telegram WebApp

prisma/
└── schema.prisma            # Схема базы данных
```

## Схема базы данных

### User (Пользователи)
- `id` - уникальный идентификатор
- `telegramId` - ID пользователя в Telegram
- `username`, `firstName`, `lastName` - информация о пользователе
- `isPremium` - Telegram Premium статус

### Habit (Привычки)
- `id` - уникальный идентификатор
- `userId` - связь с пользователем
- `title` - название привычки
- `description` - описание
- `icon`, `color` - визуальное оформление
- `frequency` - частота (daily, weekly, monthly)
- `reminder` - напоминания

### HabitCompletion (Выполнения)
- `id` - уникальный идентификатор
- `habitId` - связь с привычкой
- `userId` - связь с пользователем
- `completedAt` - дата выполнения

### HabitStreak (Серии)
- `id` - уникальный идентификатор
- `habitId` - связь с привычкой
- `currentStreak` - текущая серия
- `longestStreak` - самая длинная серия

## Использование аутентификации

```tsx
'use client'

import { useAuthContext } from './components/AuthProvider'

export default function Page() {
  const { user, loading, isAuthenticated } = useAuthContext()

  if (loading) return <div>Загрузка...</div>
  
  if (!isAuthenticated) return <div>Не авторизован</div>

  return (
    <div>
      <h1>Привет, {user.firstName}!</h1>
      <p>Telegram ID: {user.telegramId}</p>
    </div>
  )
}
```

## API Routes

### POST /api/auth/telegram
Аутентификация пользователя через Telegram WebApp

**Request:**
```json
{
  "initData": "telegram_init_data_string"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "telegramId": "123456789",
    "username": "username",
    "firstName": "John",
    "isPremium": false
  }
}
```

### GET /api/auth/telegram?telegramId=123456789
Получение информации о пользователе

## Следующие шаги

1. Создайте API для работы с привычками (CRUD операции)
2. Добавьте UI для создания и управления привычками
3. Реализуйте систему уведомлений через Telegram Bot
4. Добавьте статистику и визуализацию прогресса
5. Внедрите геймификацию (достижения, награды)

