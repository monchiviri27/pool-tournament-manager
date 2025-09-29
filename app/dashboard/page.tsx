import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, TrendingUp, Eye, Plus, CheckCircle } from "lucide-react"

export default function Dashboard() {
  return (
    // 1. ELIMINAMOS la clase 'min-h-screen bg-background' del contenedor exterior.
    // Usaremos una clase más flexible para el layout general.
    <div className="flex min-h-screen bg-background">
      {/* 2. El componente Sidebar debería manejar su propia posición (fija/oculta/visible) */}
      <Sidebar />

      {/* 3. Ajustamos el main para:
             - Ocupar el espacio restante (flex-1)
             - Asegurar el padding y un margen izquierdo solo en desktop (md:pl-64)
             - Usar el margen izquierdo para "empujar" el contenido si la barra lateral está abierta y es fija.
      */}
      <main className="flex-1 p-4 md:p-8 md:pl-64">
        {/* Header - Ajustado el margen superior para móvil */}
        <div className="mb-8 mt-4 md:ml-10"> {/* Reducido mt-12 a mt-4 para mejor look en móvil */}
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Vista general de torneos y estadísticas</p>
        </div>

        {/* Stats Cards - ¡Se ven bien gracias al grid responsivo! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:ml-10">
          {/* ... Card 1 ... */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Torneos Activos</CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">3</div>
              <p className="text-xs text-muted-foreground">+1 desde la semana pasada</p>
            </CardContent>
          </Card>

          {/* ... Card 2 ... */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Total de Jugadores</CardTitle>
              <Users className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">24</div>
              <p className="text-xs text-muted-foreground">+4 nuevos este mes</p>
            </CardContent>
          </Card>

          {/* ... Card 3 ... */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Próximo Partido</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">Hoy</div>
              <p className="text-xs text-muted-foreground">18:30 - Mesa 1</p>
            </CardContent>
          </Card>

          {/* ... Card 4 ... */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Partidos Completados</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">156</div>
              <p className="text-xs text-muted-foreground">+12% vs mes anterior</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Tournaments Table - Ajuste de botones en móvil */}
        <Card className="bg-card border-border md:ml-10">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-2"> {/* Agregado flex-wrap y gap-2 */}
              <CardTitle className="text-card-foreground">Torneos Recientes</CardTitle>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Torneo
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Tournament Row (Estructura de Fila) */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-muted rounded-lg gap-3"> {/* Cambiado a flex-col en móvil */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Torneo de Primavera 2024</h3>
                    <p className="text-sm text-muted-foreground">15 Mar 2024</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3"> {/* Agregado flex-wrap */}
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Activo
                  </Badge>
                  <div className="flex gap-2">
                    {/* Botones */}
                    <Button size="sm" variant="outline" className="flex-1 min-w-[120px]"> {/* Añadido min-w */}
                      <Eye className="w-4 h-4 mr-1" />
                      Ver Cuadro
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 min-w-[120px]"> {/* Añadido min-w */}
                      <Plus className="w-4 h-4 mr-1" />
                      Añadir Marcador
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tournament Row 2 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-muted rounded-lg gap-3"> {/* Cambiado a flex-col en móvil */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Copa de Invierno</h3>
                    <p className="text-sm text-muted-foreground">28 Feb 2024</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3"> {/* Agregado flex-wrap */}
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Finalizado
                  </Badge>
                  <div className="flex gap-2">
                    {/* Botones */}
                    <Button size="sm" variant="outline" className="flex-1 min-w-[120px]">
                      <Eye className="w-4 h-4 mr-1" />
                      Ver Cuadro
                    </Button>
                    <Button size="sm" variant="outline" disabled className="flex-1 min-w-[120px]">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Completado
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tournament Row 3 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-muted rounded-lg gap-3"> {/* Cambiado a flex-col en móvil */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Eliminatorias Rápidas</h3>
                    <p className="text-sm text-muted-foreground">10 Mar 2024</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3"> {/* Agregado flex-wrap */}
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Activo
                  </Badge>
                  <div className="flex gap-2">
                    {/* Botones */}
                    <Button size="sm" variant="outline" className="flex-1 min-w-[120px]">
                      <Eye className="w-4 h-4 mr-1" />
                      Ver Cuadro
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 min-w-[120px]">
                      <Plus className="w-4 h-4 mr-1" />
                      Añadir Marcador
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
