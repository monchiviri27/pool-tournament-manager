import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Plus, Calendar, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TournamentsPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Sidebar />

        <main className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="mb-8 mt-12 md:mt-0">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Torneos</h1>
                <p className="text-muted-foreground">Gestiona y visualiza todos los torneos</p>
              </div>
                 <Link href="/tournaments/create">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Crear Torneo
                    </Button>
                 </Link>   
            </div>
          </div>

          {/* Tournament Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Active Tournament */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    <CardTitle className="text-card-foreground">Torneo de Primavera 2024</CardTitle>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">Activo</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>15 Mar 2024 - En curso</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>16 jugadores</span>
                </div>
                <div className="pt-2">
                  <Link href="/tournaments/spring-2024">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Ver Cuadro de Eliminación
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Another Active Tournament */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    <CardTitle className="text-card-foreground">Eliminatorias Rápidas</CardTitle>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">Activo</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>10 Mar 2024 - En curso</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>8 jugadores</span>
                </div>
                <div className="pt-2">
                  <Link href="/tournaments/quick-elimination">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Ver Cuadro de Eliminación
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Completed Tournament */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    <CardTitle className="text-card-foreground">Copa de Invierno</CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Finalizado
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>28 Feb 2024 - Completado</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>12 jugadores</span>
                </div>
                <div className="pt-2">
                  <Link href="/tournaments/winter-cup">
                    <Button variant="outline" className="w-full bg-transparent">
                      Ver Resultados
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
