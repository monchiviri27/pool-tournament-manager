export interface Player {
  id: string
  name: string
  avatar: string
  totalPoints: number
  wins: number
  losses: number
  matchesPlayed: number
  winRate: number
  ranking: number
}

export interface Tournament {
  id: string
  name: string
  date: string
  status: "active" | "completed" | "upcoming"
  participants: number
  winner?: string
}

// Mock data for players
const mockPlayers: Player[] = [
  {
    id: "1",
    name: "Carlos Mendoza",
    avatar: "/man-pool-player.jpg",
    totalPoints: 2850,
    wins: 45,
    losses: 12,
    matchesPlayed: 57,
    winRate: 78.9,
    ranking: 1,
  },
  {
    id: "2",
    name: "Ana García",
    avatar: "/woman-pool-player.jpg",
    totalPoints: 2720,
    wins: 42,
    losses: 15,
    matchesPlayed: 57,
    winRate: 73.7,
    ranking: 2,
  },
  {
    id: "3",
    name: "Miguel Torres",
    avatar: "/man-pool-player-2.jpg",
    totalPoints: 2650,
    wins: 38,
    losses: 18,
    matchesPlayed: 56,
    winRate: 67.9,
    ranking: 3,
  },
  {
    id: "4",
    name: "Laura Martínez",
    avatar: "/woman-pool-player-2.jpg",
    totalPoints: 2580,
    wins: 36,
    losses: 19,
    matchesPlayed: 55,
    winRate: 65.5,
    ranking: 4,
  },
  {
    id: "5",
    name: "Roberto Silva",
    avatar: "/man-pool-player-3.jpg",
    totalPoints: 2450,
    wins: 34,
    losses: 22,
    matchesPlayed: 56,
    winRate: 60.7,
    ranking: 5,
  },
  {
    id: "6",
    name: "Carmen López",
    avatar: "/woman-pool-player-3.jpg",
    totalPoints: 2380,
    wins: 32,
    losses: 24,
    matchesPlayed: 56,
    winRate: 57.1,
    ranking: 6,
  },
  {
    id: "7",
    name: "Diego Ramírez",
    avatar: "/man-pool-player.jpg",
    totalPoints: 2320,
    wins: 30,
    losses: 25,
    matchesPlayed: 55,
    winRate: 54.5,
    ranking: 7,
  },
  {
    id: "8",
    name: "Patricia Ruiz",
    avatar: "/woman-pool-player.jpg",
    totalPoints: 2250,
    wins: 28,
    losses: 27,
    matchesPlayed: 55,
    winRate: 50.9,
    ranking: 8,
  },
]

export function getPlayersRanking(): Player[] {
  // Sort players by total points (descending), then by wins (descending)
  return mockPlayers
    .sort((a, b) => {
      if (b.totalPoints !== a.totalPoints) {
        return b.totalPoints - a.totalPoints
      }
      return b.wins - a.wins
    })
    .map((player, index) => ({
      ...player,
      ranking: index + 1,
    }))
}

export function getPlayerById(id: string): Player | undefined {
  return mockPlayers.find((player) => player.id === id)
}

export function getTournaments(): Tournament[] {
  return [
    {
      id: "1",
      name: "Torneo de Primavera 2024",
      date: "2024-03-15",
      status: "active",
      participants: 16,
    },
    {
      id: "2",
      name: "Copa de Invierno",
      date: "2024-02-28",
      status: "completed",
      participants: 12,
      winner: "Carlos Mendoza",
    },
    {
      id: "3",
      name: "Eliminatorias Rápidas",
      date: "2024-03-10",
      status: "active",
      participants: 8,
    },
  ]
}
