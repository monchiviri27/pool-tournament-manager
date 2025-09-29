import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, TrendingUp, Target, Award } from "lucide-react"
// NO se añade 'use client' ni 'useState' ni 'Button'
import { getPlayersRanking } from "@/lib/data-service"

export default function PlayersRankingPage() {
  const players = getPlayersRanking()

  const getRankingBadge = (ranking: number) => {
    if (ranking === 1) {
      return <Badge className="bg-yellow-500 text-yellow-50 hover:bg-yellow-600">🥇 1°</Badge>
    } else if (ranking === 2) {
      return <Badge className="bg-gray-400 text-gray-50 hover:bg-gray-500">🥈 2°</Badge>
    } else if (ranking === 3) {
      return <Badge className="bg-amber-600 text-amber-50 hover:bg-amber-700">🥉 3°</Badge>
    } else {
      return (
        <Badge variant="outline" className="border-border text-foreground">
          {ranking}°
        </Badge>
      )
    }
  }

  return (
    // CAMBIO DE LAYOUT: flex y min-h-screen
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      {/* CAMBIO DE LAYOUT: flex-1, padding y pl-64 condicional */}
      <main className="flex-1 p-4 md:p-8 md:pl-64 md:ml-10">
        
        {/* Header - Ajustado el margen superior para móvil */}
        <div className="mb-8 mt-4 md:mt-0"> {/* mt-4 en móvil, mt-0 en escritorio */}
          <h1 className="text-3xl font-bold text-foreground mb-2">Ranking de Jugadores</h1>
          <p className="text-muted-foreground">Clasificación general por puntos y victorias</p>
        </div>

        {/* Stats Cards - Ajustado a 2 columnas en móvil (grid-cols-2) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"> 
        
          {/* Tarjeta 1: Total Jugadores (CONTENIDO RESTAURADO) */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Total Jugadores</CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{players.length}</div>
              <p className="text-xs text-muted-foreground">Jugadores activos</p>
            </CardContent>
          </Card>

          {/* Tarjeta 2: Líder (CONTENIDO RESTAURADO) */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Líder</CardTitle>
              <Award className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{players[0]?.totalPoints}</div>
              <p className="text-xs text-muted-foreground">{players[0]?.name}</p>
            </CardContent>
          </Card>

          {/* Tarjeta 3: Promedio Puntos (CONTENIDO RESTAURADO) */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Promedio Puntos</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {Math.round(players.reduce((acc, p) => acc + p.totalPoints, 0) / players.length)}
              </div>
              <p className="text-xs text-muted-foreground">Puntos por jugador</p>
            </CardContent>
          </Card>

          {/* Tarjeta 4: Mejor Ratio (CONTENIDO RESTAURADO) */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Mejor Ratio</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {Math.max(...players.map((p) => p.winRate)).toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">Porcentaje de victorias</p>
            </CardContent>
          </Card>
        </div>

        {/* Ranking Table */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Clasificación General
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {players.map((player) => (
                <div
                  key={player.id}
                  // CAMBIO RESPONSIVO: flex-col en móvil, flex-row en sm:
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors gap-3"
                >
                  
                  {/* Bloque 1: Ranking, Avatar y Nombre */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="flex items-center gap-3 min-w-[100px]">
                      {getRankingBadge(player.ranking)}
                      <Avatar className="w-10 h-10"> {/* Reducido w-12/h-12 a w-10/h-10 */}
                        <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                        <AvatarFallback className="bg-primary/20 text-primary">
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{player.name}</h3>
                      <p className="text-sm text-muted-foreground sm:hidden">{player.matchesPlayed} partidos jugados</p>
                      <p className="text-sm text-muted-foreground hidden sm:block">Partidos: {player.matchesPlayed}</p>
                    </div>
                  </div>

                  {/* Bloque 2: Estadísticas clave */}
                  <div className="flex justify-between w-full sm:w-auto sm:gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50">
                    
                    {/* Puntos */}
                    <div className="w-1/3 text-center sm:w-auto sm:text-right">
                      <p className="text-lg font-bold text-primary">{player.totalPoints}</p>
                      <p className="text-xs text-muted-foreground">Puntos</p>
                    </div>
                    {/* Victorias */}
                    <div className="w-1/3 text-center sm:w-auto sm:text-right">
                      <p className="text-lg font-semibold text-accent">{player.wins}</p>
                      <p className="text-xs text-muted-foreground">Victorias</p>
                    </div>
                    {/* Ratio */}
                    <div className="w-1/3 text-center sm:w-auto sm:text-right">
                      <p className="text-lg font-semibold text-foreground">{player.winRate.toFixed(1)}%</p>
                      <p className="text-xs text-muted-foreground">Ratio</p>
                    </div>
                    
                    {/* Historial (Oculto en móvil) */}
                    <div className="hidden sm:block text-right">
                      <p className="text-sm text-muted-foreground">
                        {player.wins}W - {player.losses}L
                      </p>
                      <p className="text-xs text-muted-foreground">Historial</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
