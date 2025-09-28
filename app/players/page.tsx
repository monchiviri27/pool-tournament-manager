import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Trophy, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

const mockPlayers = [
  {
    id: "carlos-mendez",
    name: "Carlos Mendez",
    avatar: "/man-pool-player.jpg",
    wins: 24,
    losses: 8,
    winRate: 75,
    streak: 5,
    lastPlayed: "2024-03-15",
    status: "active",
  },
  {
    id: "maria-lopez",
    name: "María López",
    avatar: "/woman-pool-player.jpg",
    wins: 18,
    losses: 12,
    winRate: 60,
    streak: 2,
    lastPlayed: "2024-03-14",
    status: "active",
  },
  {
    id: "pedro-silva",
    name: "Pedro Silva",
    avatar: "/man-pool-player-2.jpg",
    wins: 22,
    losses: 10,
    winRate: 69,
    streak: 3,
    lastPlayed: "2024-03-13",
    status: "active",
  },
  {
    id: "laura-vega",
    name: "Laura Vega",
    avatar: "/woman-pool-player-2.jpg",
    wins: 16,
    losses: 14,
    winRate: 53,
    streak: 1,
    lastPlayed: "2024-03-12",
    status: "active",
  },
  {
    id: "roberto-diaz",
    name: "Roberto Díaz",
    avatar: "/man-pool-player-3.jpg",
    wins: 20,
    losses: 8,
    winRate: 71,
    streak: 4,
    lastPlayed: "2024-03-11",
    status: "active",
  },
  {
    id: "sofia-ramos",
    name: "Sofia Ramos",
    avatar: "/woman-pool-player-3.jpg",
    wins: 14,
    losses: 16,
    winRate: 47,
    streak: 0,
    lastPlayed: "2024-03-10",
    status: "inactive",
  },
]

export default function PlayersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="md:ml-64 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 mt-12 md:mt-0">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Jugadores</h1>
              <p className="text-muted-foreground">Estadísticas y perfiles de jugadores</p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Agregar Jugador
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Buscar jugadores..." className="pl-10 bg-input border-border" />
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPlayers.map((player) => (
            <Card key={player.id} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {player.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-card-foreground">{player.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Último juego: {new Date(player.lastPlayed).toLocaleDateString("es-ES")}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={player.status === "active" ? "default" : "secondary"}
                    className={player.status === "active" ? "bg-primary text-primary-foreground" : ""}
                  >
                    {player.status === "active" ? "Activo" : "Inactivo"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span className="text-2xl font-bold text-primary">{player.wins}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Victorias</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Target className="w-4 h-4 text-muted-foreground" />
                      <span className="text-2xl font-bold text-foreground">{player.losses}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Derrotas</p>
                  </div>
                </div>

                {/* Win Rate */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Porcentaje de Triunfos</span>
                    <span className="text-sm font-medium text-foreground">{player.winRate}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${player.winRate}%` }}
                    />
                  </div>
                </div>

                {/* Streak */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Racha de Victorias</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{player.streak}</span>
                  </div>
                </div>

                {/* View Profile Button */}
                <div className="pt-2">
                  <Link href={`/players/${player.id}`}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Ver Perfil Completo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
