// src/components/CreateTournamentForm.tsx (o src/app/tournaments/create/page.tsx)
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, CalendarCheck, Save } from "lucide-react";

export default function CreateTournamentForm() {
  return (
    <div className="flex justify-center p-4 md:p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-accent" />
            <CardTitle className="text-2xl">Configurar Nuevo Torneo</CardTitle>
          </div>
          <CardDescription>
            Define las reglas y la estructura de tu próximo campeonato de billar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-8">
            {/* Sección 1: Detalles Básicos */}
            <h3 className="text-lg font-semibold border-b pb-2 text-foreground">Detalles Generales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nombre del Torneo */}
              <div className="space-y-2">
                <Label htmlFor="tournamentName">Nombre del Torneo</Label>
                <Input id="tournamentName" placeholder="Ej: Copa de Verano Bola 8" required />
              </div>

              {/* Ubicación */}
              <div className="space-y-2">
                <Label htmlFor="location">Ubicación / Lugar (Opcional)</Label>
                <Input id="location" placeholder="Ej: Sala Master Cue" />
              </div>
            </div>

            {/* Sección 2: Configuración del Juego */}
            <h3 className="text-lg font-semibold border-b pb-2 text-foreground">Formato y Reglas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Tipo de Juego */}
              <div className="space-y-2">
                <Label htmlFor="gameType">Tipo de Juego</Label>
                <Select required>
                  <SelectTrigger id="gameType">
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eight_ball">Bola 8</SelectItem>
                    <SelectItem value="nine_ball">Bola 9</SelectItem>
                    <SelectItem value="snooker">Snooker</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Formato del Torneo */}
              <div className="space-y-2">
                <Label htmlFor="format">Formato del Torneo</Label>
                <Select required>
                  <SelectTrigger id="format">
                    <SelectValue placeholder="Selecciona el formato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single_elim">Eliminación Simple</SelectItem>
                    <SelectItem value="double_elim">Doble Eliminación</SelectItem>
                    <SelectItem value="round_robin">Round Robin (Liga)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Máximo de Jugadores */}
              <div className="space-y-2">
                <Label htmlFor="maxPlayers">Máximo de Jugadores</Label>
                <Input id="maxPlayers" type="number" placeholder="Ej: 16" min={2} required />
              </div>
            </div>

            {/* Sección 3: Fechas y Costos */}
            <h3 className="text-lg font-semibold border-b pb-2 text-foreground">Programación y Costos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Fecha de Inicio */}
              <div className="space-y-2">
                <Label htmlFor="startDate">Fecha de Inicio</Label>
                {/* Nota: En un proyecto real, usarías un DatePicker más avanzado de shadcn/ui */}
                <Input id="startDate" type="date" required />
              </div>
              
              {/* Hora de Inicio */}
              <div className="space-y-2">
                <Label htmlFor="startTime">Hora de Inicio (Opcional)</Label>
                <Input id="startTime" type="time" />
              </div>

              {/* Costo de Inscripción */}
              <div className="space-y-2">
                <Label htmlFor="entryFee">Costo de Inscripción ($)</Label>
                <Input id="entryFee" type="number" placeholder="Ej: 10" min={0} step="any" />
              </div>
            </div>

            {/* Botón de Acción */}
            <div className="pt-6">
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Crear Torneo
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}