# Telegram Трекер Привычек

Telegram Mini App для отслеживания привычек с интеграцией Supabase и Prisma.

## 🚀 Быстрый старт

### 1. Настройте переменные окружения

Создайте файл `.env` в корне проекта:

```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres"
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
TELEGRAM_BOT_TOKEN="your-bot-token"
NEXT_PUBLIC_APP_URL="http://localhost:80"
```

### 2. Примените схему базы данных

```bash
# Применить схему к базе данных
npx prisma db push

# Сгенерировать Prisma Client
npx prisma generate
```

### 3. Запустите проект

```bash
npm run dev
```

Приложение будет доступно на `http://localhost:80`

## 📁 Что было создано

### База данных (Prisma)
- ✅ **User** - пользователи Telegram
- ✅ **Habit** - привычки с настройками частоты и напоминаний
- ✅ **HabitCompletion** - отметки о выполнении
- ✅ **HabitStreak** - серии выполнений для мотивации

### API Routes
- ✅ **POST /api/auth/telegram** - аутентификация пользователя
- ✅ **GET /api/auth/telegram** - получение данных пользователя

### Клиенты и утилиты
- ✅ **lib/prisma.ts** - Prisma клиент
- ✅ **lib/supabase.ts** - Supabase клиент (client + admin)
- ✅ **lib/telegram.ts** - валидация данных от Telegram WebApp

### React компоненты
- ✅ **hooks/useAuth.tsx** - хук для аутентификации
- ✅ **components/AuthProvider.tsx** - провайдер аутентификации
- ✅ Обновлен **layout.tsx** с AuthProvider
- ✅ Обновлен **page.tsx** с примером использования

## 💡 Использование аутентификации

```tsx
import { useAuthContext } from './components/AuthProvider'

export default function MyComponent() {
  const { user, loading, isAuthenticated } = useAuthContext()

  if (loading) return <div>Загрузка...</div>
  if (!isAuthenticated) return <div>Не авторизован</div>

  return <div>Привет, {user.firstName}!</div>
}
```

## 🔧 Команды Prisma

```bash
# Открыть Prisma Studio (визуальный редактор БД)
npx prisma studio

# Применить изменения схемы
npx prisma db push

# Создать миграцию
npx prisma migrate dev --name your_migration_name

# Сгенерировать клиент после изменения схемы
npx prisma generate
```

## 📚 Документация

Полная инструкция по настройке: [SETUP.md](./SETUP.md)

## 🎯 Следующие шаги

1. Настройте Supabase проект
2. Создайте Telegram бота через @BotFather
3. Примените схему базы данных
4. Создайте API для управления привычками
5. Добавьте UI для работы с привычками
6. Реализуйте систему уведомлений

---

**Tech Stack:** Next.js 16, React 19, Prisma, Supabase, TypeScript, Telegram Mini Apps
