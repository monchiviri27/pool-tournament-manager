"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { showSuccessToast } from "@/components/ui/toast-utils"

interface User {
  id: string
  username: string
  role: "admin"
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if user is logged in on mount
    const savedUser = localStorage.getItem("pool-manager-user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = async (username: string, password: string): Promise<boolean> => {
    // Mock authentication - in production, this would be a real API call
    if (username === "admin" && password === "admin123") {
      const mockUser: User = {
        id: "1",
        username: "admin",
        role: "admin",
      }
      setUser(mockUser)
      localStorage.setItem("pool-manager-user", JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("pool-manager-user")
    showSuccessToast("Sesión cerrada correctamente", "¡Hasta pronto!")
  }

  const isAuthenticated = !!user

  return <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
