'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useAuth, User } from '../hooks/useAuth'

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  isAuthenticated: false,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within AuthProvider')
  }
  return context
}

