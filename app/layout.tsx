import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
// 1. Eliminamos 'Suspense'
import { AuthProvider } from "@/lib/auth-context"
import { ThemeProvider } from "@/lib/theme-context" // Asegúrate de que este es tu ThemeProvider
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gestor de Torneos de Billar",
  description: "Sistema de gestión de torneos de billar profesional",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // 🚨 2. Añadir 'suppressHydrationWarning' para el manejo de temas
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {/* ThemeProvider DEBE envolver a todos los demás providers */}
        <ThemeProvider>
          {/* AuthProvider envuelve a la aplicación para el contexto de usuario */}
          <AuthProvider>
            {/* children es toda la aplicación */}
            {children}
            {/* Toaster al final del body para un Z-Index correcto */}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
