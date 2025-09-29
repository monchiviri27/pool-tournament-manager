import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Trophy, BarChart3, Shield, Users, Calendar, Award } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Pool Manager</h1>
              <p className="text-xs text-muted-foreground">Gestión de Torneos</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
                <Shield className="w-4 h-4 mr-2" />
                Acceso Admin
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Pool Tournament
            <span className="text-primary block">Manager</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sistema completo de gestión de torneos de billar. Consulta rankings, sigue los torneos en vivo y descubre a
            los mejores jugadores.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/players/ranking">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                <BarChart3 className="w-5 h-5 mr-2" />
                Ver Ranking de Jugadores
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Shield className="w-5 h-5 mr-2" />
                Acceso Administrador
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Funcionalidades Principales</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para gestionar torneos de billar de manera profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-card-foreground">Rankings en Tiempo Real</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Consulta las estadísticas y rankings actualizados de todos los jugadores
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-card-foreground">Gestión de Torneos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Administra torneos completos con cuadros de eliminación y seguimiento de partidos
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-card-foreground">Perfiles de Jugadores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Información detallada y estadísticas de rendimiento de cada jugador
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-card-foreground">Programación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Organiza y programa partidos con seguimiento de horarios y mesas</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-card-foreground">Historial Completo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Acceso a resultados históricos y estadísticas de torneos anteriores
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-card-foreground">Panel de Administración</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Herramientas completas para administradores y organizadores de torneos
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <Trophy className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">© 2025 Pool Tournament Manager</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/players/ranking">
                <Button variant="ghost" size="sm">
                  Ver Rankings
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Acceso Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
