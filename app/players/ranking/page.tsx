// 🚨 AÑADIMOS 'use client' y los hooks de estado
"use client"

import { useState, useEffect, useMemo } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, TrendingUp, Target, Award } from "lucide-react"
import { getPlayersRanking } from "@/lib/data-service" // Asumimos que esta función existe
import { RankingTableSkeleton } from "@/components/ranking-skeleton" // Importamos el Skeleton

// NOTA: Tienes que crear el archivo src/components/ranking-skeleton.tsx con el código que te di anteriormente.

export default function PlayersRankingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [players, setPlayers] = useState<any[]>([]) // Define el estado para almacenar los jugadores

  useEffect(() => {
    // 🚨 Simulación de llamada al backend para obtener datos del ranking
    const fetchData = async () => {
      // Simula una latencia de red de 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 200)) 
      
      // Obtener los datos mock/reales
      const rankingData = getPlayersRanking()
      setPlayers(rankingData)
      setIsLoading(false)
    }

    fetchData()
  }, [])
  
  // Utiliza useMemo para calcular las estadísticas solo cuando la lista de jugadores cambie
  const totalPlayers = players.length;
  const topPlayer = players[0];
  const avgPoints = useMemo(() => {
    if (totalPlayers === 0) return 0;
    const totalPoints = players.reduce((acc, p) => acc + p.totalPoints, 0);
    return Math.round(totalPoints / totalPlayers);
  }, [players, totalPlayers]);

  const maxWinRate = useMemo(() => {
    if (totalPlayers === 0) return 0;
    return Math.max(...players.map((p) => p.winRate)) || 0;
  }, [players, totalPlayers]);


  const getRankingBadge = (ranking: number) => {
    // Lógica del Badge
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
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      {/* 🚨 CORRECCIÓN DE MARGEN: Eliminado md:ml-10. Ahora solo usa md:pl-64 */}
      <main className="flex-1 p-4 md:p-8 md:pl-64 md:ml-10">
        
        {/* Header - Ajuste de margen superior móvil a mt-16 */}
        <div className="mb-8 mt-16 md:mt-0"> 
          <h1 className="text-3xl font-bold text-foreground mb-2">Ranking de Jugadores</h1>
          <p className="text-muted-foreground">Clasificación general por puntos y victorias</p>
        </div>

        {/* 🚨 LÓGICA CONDICIONAL DE CARGA */}
        {isLoading ? (
          <RankingTableSkeleton />
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"> 
              
              {/* Tarjeta 1: Total Jugadores */}
              <Card className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-card-foreground">Total Jugadores</CardTitle>
                  <Trophy className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-card-foreground">{totalPlayers}</div>
                  <p className="text-xs text-muted-foreground">Jugadores activos</p>
                </CardContent>
              </Card>

              {/* Tarjeta 2: Líder */}
              <Card className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-card-foreground">Líder</CardTitle>
                  <Award className="h-4 w-4 text-accent" />
                </CardHeader>
                <CardContent>
                  {topPlayer ? (
                    <>
                      <div className="text-2xl font-bold text-card-foreground">{topPlayer.totalPoints}</div>
                      <p className="text-xs text-muted-foreground">{topPlayer.name}</p>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">No hay jugadores</p>
                  )}
                </CardContent>
              </Card>

              {/* Tarjeta 3: Promedio Puntos */}
              <Card className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-card-foreground">Promedio Puntos</CardTitle>
                  <Target className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-card-foreground">{avgPoints}</div>
                  <p className="text-xs text-muted-foreground">Puntos por jugador</p>
                </CardContent>
              </Card>

              {/* Tarjeta 4: Mejor Ratio */}
              <Card className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-card-foreground">Mejor Ratio</CardTitle>
                  <TrendingUp className="h-4 w-4 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-card-foreground">{maxWinRate.toFixed(1)}%</div>
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
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors gap-3"
                    >
                      {/* Bloque 1: Ranking, Avatar y Nombre */}
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="flex items-center gap-3 min-w-[100px]">
                          {getRankingBadge(player.ranking)}
                          <Avatar className="w-10 h-10">
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
          </>
        )}
      </main>
    </div>
  )
}
