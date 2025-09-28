"use client"

import { toast } from "@/hooks/use-toast"

export const showSuccessToast = (message: string, title?: string) => {
  toast({
    title: title || "Éxito",
    description: message,
    variant: "default",
    className: "border-green-500/20 bg-green-50 text-green-900 dark:bg-green-950/50 dark:text-green-100",
  })
}

export const showErrorToast = (message: string, title?: string) => {
  toast({
    title: title || "Error",
    description: message,
    variant: "destructive",
  })
}

export const showInfoToast = (message: string, title?: string) => {
  toast({
    title: title || "Información",
    description: message,
    variant: "default",
    className: "border-blue-500/20 bg-blue-50 text-blue-900 dark:bg-blue-950/50 dark:text-blue-100",
  })
}

export const showWarningToast = (message: string, title?: string) => {
  toast({
    title: title || "Advertencia",
    description: message,
    variant: "default",
    className: "border-yellow-500/20 bg-yellow-50 text-yellow-900 dark:bg-yellow-950/50 dark:text-yellow-100",
  })
}
