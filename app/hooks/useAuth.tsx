'use client'

import { useState, useEffect } from 'react'
import { useTelegram } from '../useTg'

export interface User {
  id: string
  telegramId: string
  username?: string
  firstName?: string
  lastName?: string
  languageCode?: string
  isPremium: boolean
  createdAt: string
  updatedAt: string
}

export function useAuth() {
  const { webApp, user: tgUser } = useTelegram()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const authenticateUser = async () => {
      if (!webApp || !tgUser) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        // Получаем initData от Telegram WebApp
        const initData = webApp.initData

        if (!initData) {
          throw new Error('No initData from Telegram')
        }

        // Отправляем данные на сервер для аутентификации
        const response = await fetch('/api/auth/telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ initData }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Authentication failed')
        }

        const data = await response.json()
        setUser(data.user)
      } catch (err) {
        console.error('Authentication error:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    authenticateUser()
  }, [webApp, tgUser])

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
  }
}

