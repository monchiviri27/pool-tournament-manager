"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, TrendingUp, Calendar, Award, Zap } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface PlayerProfileProps {
  playerId: string
}

// Mock data - in a real app, this would come from your database
const mockPlayerData = {
  "carlos-mendez": {
    name: "Carlos Mendez",
    avatar: "/man-pool-player.jpg",
    wins: 24,
    losses: 8,
    winRate: 75,
    streak: 5,
    bestStreak: 8,
    totalGames: 32,
    joinDate: "2023-08-15",
    status: "active",
    tournaments: 6,
    championships: 2,
    recentMatches: [
      { date: "2024-03-15", opponent: "Ana García", result: "win", score: "8-3" },
      { date: "2024-03-12", opponent: "Luis Torres", result: "win", score: "8-6" },
      { date: "2024-03-10", opponent: "Pedro Silva", result: "win", score: "8-5" },
      { date: "2024-03-08", opponent: "María López", result: "win", score: "8-4" },
      { date: "2024-03-05", opponent: "Diego Morales", result: "win", score: "8-7" },
    ],
    performanceData: [
      { match: 1, winRate: 50 },
      { match: 2, winRate: 60 },
      { match: 3, winRate: 55 },
      { match: 4, winRate: 65 },
      { match: 5, winRate: 70 },
      { match: 6, winRate: 68 },
      { match: 7, winRate: 72 },
      { match: 8, winRate: 75 },
      { match: 9, winRate: 73 },
      { match: 10, winRate: 75 },
    ],
  },
}

export function PlayerProfile({ playerId }: PlayerProfileProps) {
  const player = mockPlayerData[playerId as keyof typeof mockPlayerData]

  if (!player) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Jugador no encontrado</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Player Header */}
      <Card className="bg-card border-border">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
              <AvatarFallback className="bg-primary/20 text-primary text-2xl">
                {player.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold text-foreground">{player.name}</h1>
                <Badge className="bg-primary text-primary-foreground w-fit mx-auto md:mx-0">
                  {player.status === "active" ? "Activo" : "Inactivo"}
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{player.wins}</div>
                  <p className="text-sm text-muted-foreground">Victorias</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{player.losses}</div>
                  <p className="text-sm text-muted-foreground">Derrotas</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">{player.winRate}%</div>
                  <p className="text-sm text-muted-foreground">% Triunfos</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{player.streak}</div>
                  <p className="text-sm text-muted-foreground">Racha Actual</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Statistics Cards */}
        <div className="lg:col-span-1 space-y-6">
          {/* Additional Stats */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Award className="w-5 h-5 text-primary" />
                Estadísticas Adicionales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Torneos Jugados</span>
                </div>
                <span className="font-medium text-foreground">{player.tournaments}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Campeonatos</span>
                </div>
                <span className="font-medium text-foreground">{player.championships}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Mejor Racha</span>
                </div>
                <span className="font-medium text-foreground">{player.bestStreak}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Miembro desde</span>
                </div>
                <span className="font-medium text-foreground">
                  {new Date(player.joinDate).toLocaleDateString("es-ES")}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Matches */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Partidos Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {player.recentMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{match.opponent}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(match.date).toLocaleDateString("es-ES")}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={match.result === "win" ? "default" : "destructive"}
                        className={match.result === "win" ? "bg-primary text-primary-foreground" : ""}
                      >
                        {match.result === "win" ? "Victoria" : "Derrota"}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{match.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart */}
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                Rendimiento en Últimos 10 Partidos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={player.performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="match" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--card-foreground))",
                      }}
                      formatter={(value) => [`${value}%`, "Porcentaje de Victorias"]}
                      labelFormatter={(label) => `Partido ${label}`}
                    />
                    <Line
                      type="monotone"
                      dataKey="winRate"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
