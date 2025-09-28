import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, TrendingUp, Target, Award } from "lucide-react"
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
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="md:ml-64 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 mt-12 md:mt-0">
          <h1 className="text-3xl font-bold text-foreground mb-2">Ranking de Jugadores</h1>
          <p className="text-muted-foreground">Clasificación general por puntos y victorias</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
                  className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      {getRankingBadge(player.ranking)}
                      <Avatar className="w-12 h-12">
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
                      <p className="text-sm text-muted-foreground">{player.matchesPlayed} partidos jugados</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-right">
                    <div>
                      <p className="text-lg font-bold text-primary">{player.totalPoints}</p>
                      <p className="text-xs text-muted-foreground">Puntos</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-accent">{player.wins}</p>
                      <p className="text-xs text-muted-foreground">Victorias</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">{player.winRate.toFixed(1)}%</p>
                      <p className="text-xs text-muted-foreground">Ratio</p>
                    </div>
                    <div className="hidden sm:block">
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
