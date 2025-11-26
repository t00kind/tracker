import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Клиент для клиентской стороны
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Для Telegram Mini Apps не нужна персистентная сессия
    autoRefreshToken: false,
  },
})

// Сервер-сайд клиент с полными правами (только для API routes)
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
)

