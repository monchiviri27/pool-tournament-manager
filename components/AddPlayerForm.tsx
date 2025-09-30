// src/components/AddPlayerForm.tsx (o src/app/players/add/page.tsx)
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Save } from "lucide-react";

export default function AddPlayerForm() {
  return (
    <div className="flex justify-center p-4 md:p-8">
      <Card className="w-full max-w-3xl"> {/* Aumentado el ancho a max-w-3xl para más espacio */}
        <CardHeader>
          <div className="flex items-center gap-3">
            <UserPlus className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Registro de Nuevo Jugador</CardTitle>
          </div>
          <CardDescription>
            Introduce los detalles personales y el nivel de juego para un registro completo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            
            {/* 1. Nombres */}
            <h3 className="text-md font-semibold border-b pb-2 text-foreground/80">Información Personal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre */}
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombre</Label>
                <Input id="firstName" placeholder="Ej: Juan" required />
              </div>
              
              {/* Apellido */}
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellido</Label>
                <Input id="lastName" placeholder="Ej: Pérez" required />
              </div>
              
              {/* Apodo / Alias */}
              <div className="space-y-2">
                <Label htmlFor="nickname">Apodo / Alias (Opcional)</Label>
                <Input id="nickname" placeholder="Ej: 'El Martillo'" />
              </div>
              
              {/* ID/Número de Socio */}
              <div className="space-y-2">
                <Label htmlFor="memberId">ID / Número de Socio (Opcional)</Label>
                <Input id="memberId" placeholder="Ej: 1056" type="text" /> 
              </div>
            </div>

            {/* 2. Contacto */}
            <h3 className="text-md font-semibold border-b pb-2 text-foreground/80 pt-4">Contacto y Nivel</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="ejemplo@club.com" type="email" required />
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono (Opcional)</Label>
                <Input id="phone" placeholder="Ej: +34 600 123 456" type="tel" />
              </div>

              {/* Nivel / Handicap */}
              <div className="space-y-2">
                <Label htmlFor="handicap">Nivel / Hándicap</Label>
                <Select required>
                  <SelectTrigger id="handicap">
                    <SelectValue placeholder="Selecciona el nivel de juego" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Principiante</SelectItem>
                    <SelectItem value="5">5 - Intermedio</SelectItem>
                    <SelectItem value="8">8 - Avanzado</SelectItem>
                    <SelectItem value="10">10 - Maestro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>

            {/* Botón de Acción */}
            <div className="pt-6">
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Save className="mr-2 h-4 w-4" />
                Guardar Jugador
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}