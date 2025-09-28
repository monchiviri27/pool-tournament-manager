"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { showSuccessToast, showErrorToast, showInfoToast, showWarningToast } from "@/components/ui/toast-utils"

export function ToastDemo() {
  return (
    <Card className="w-full max-w-md bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Demostración de Notificaciones</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          onClick={() => showSuccessToast("Operación completada exitosamente")}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Mostrar Éxito
        </Button>

        <Button
          onClick={() => showErrorToast("Ha ocurrido un error inesperado")}
          variant="destructive"
          className="w-full"
        >
          Mostrar Error
        </Button>

        <Button onClick={() => showInfoToast("Esta es información importante")} variant="outline" className="w-full">
          Mostrar Información
        </Button>

        <Button
          onClick={() => showWarningToast("Ten cuidado con esta acción")}
          className="w-full bg-yellow-600 hover:bg-yellow-700"
        >
          Mostrar Advertencia
        </Button>
      </CardContent>
    </Card>
  )
}
