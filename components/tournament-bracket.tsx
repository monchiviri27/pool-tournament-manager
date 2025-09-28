"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UpdateMatchModal } from "@/components/update-match-modal"
import { Edit, Crown } from "lucide-react"

interface Match {
  id: string
  player1: string
  player2: string
  score1?: number
  score2?: number
  winner?: string
  round: number
  position: number
}

const mockMatches: Match[] = [
  // Round 1 (Octavos)
  {
    id: "1",
    player1: "Carlos Mendez",
    player2: "Ana García",
    score1: 8,
    score2: 3,
    winner: "Carlos Mendez",
    round: 1,
    position: 1,
  },
  {
    id: "2",
    player1: "Luis Torres",
    player2: "María López",
    score1: 6,
    score2: 8,
    winner: "María López",
    round: 1,
    position: 2,
  },
  {
    id: "3",
    player1: "Pedro Silva",
    player2: "Carmen Ruiz",
    score1: 8,
    score2: 5,
    winner: "Pedro Silva",
    round: 1,
    position: 3,
  },
  {
    id: "4",
    player1: "Diego Morales",
    player2: "Laura Vega",
    score1: 7,
    score2: 8,
    winner: "Laura Vega",
    round: 1,
    position: 4,
  },
  {
    id: "5",
    player1: "Roberto Díaz",
    player2: "Elena Castro",
    score1: 8,
    score2: 2,
    winner: "Roberto Díaz",
    round: 1,
    position: 5,
  },
  {
    id: "6",
    player1: "Andrés Herrera",
    player2: "Sofia Ramos",
    score1: 4,
    score2: 8,
    winner: "Sofia Ramos",
    round: 1,
    position: 6,
  },
  {
    id: "7",
    player1: "Miguel Santos",
    player2: "Isabel Flores",
    score1: 8,
    score2: 6,
    winner: "Miguel Santos",
    round: 1,
    position: 7,
  },
  {
    id: "8",
    player1: "Fernando Cruz",
    player2: "Patricia Jiménez",
    score1: 5,
    score2: 8,
    winner: "Patricia Jiménez",
    round: 1,
    position: 8,
  },

  // Round 2 (Cuartos)
  {
    id: "9",
    player1: "Carlos Mendez",
    player2: "María López",
    score1: 8,
    score2: 4,
    winner: "Carlos Mendez",
    round: 2,
    position: 1,
  },
  {
    id: "10",
    player1: "Pedro Silva",
    player2: "Laura Vega",
    score1: 6,
    score2: 8,
    winner: "Laura Vega",
    round: 2,
    position: 2,
  },
  { id: "11", player1: "Roberto Díaz", player2: "Sofia Ramos", round: 2, position: 3 },
  { id: "12", player1: "Miguel Santos", player2: "Patricia Jiménez", round: 2, position: 4 },

  // Round 3 (Semifinales)
  { id: "13", player1: "Carlos Mendez", player2: "Laura Vega", round: 3, position: 1 },
  { id: "14", player1: "TBD", player2: "TBD", round: 3, position: 2 },

  // Round 4 (Final)
  { id: "15", player1: "TBD", player2: "TBD", round: 4, position: 1 },
]

export function TournamentBracket() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleUpdateMatch = (match: Match) => {
    setSelectedMatch(match)
    setIsModalOpen(true)
  }

  const getRoundName = (round: number) => {
    switch (round) {
      case 1:
        return "Octavos de Final"
      case 2:
        return "Cuartos de Final"
      case 3:
        return "Semifinales"
      case 4:
        return "Final"
      default:
        return `Ronda ${round}`
    }
  }

  const getMatchesByRound = (round: number) => {
    return mockMatches.filter((match) => match.round === round)
  }

  const MatchCard = ({ match }: { match: Match }) => (
    <Card className="bg-card border-border mb-4 hover:border-primary/50 transition-colors">
      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Player 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`font-medium ${match.winner === match.player1 ? "text-primary" : "text-foreground"}`}>
                {match.player1}
              </span>
              {match.winner === match.player1 && <Crown className="w-4 h-4 text-primary" />}
            </div>
            <span
              className={`text-lg font-bold ${match.winner === match.player1 ? "text-primary" : "text-muted-foreground"}`}
            >
              {match.score1 ?? "-"}
            </span>
          </div>

          {/* VS Divider */}
          <div className="border-t border-border"></div>

          {/* Player 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`font-medium ${match.winner === match.player2 ? "text-primary" : "text-foreground"}`}>
                {match.player2}
              </span>
              {match.winner === match.player2 && <Crown className="w-4 h-4 text-primary" />}
            </div>
            <span
              className={`text-lg font-bold ${match.winner === match.player2 ? "text-primary" : "text-muted-foreground"}`}
            >
              {match.score2 ?? "-"}
            </span>
          </div>

          {/* Update Button */}
          <div className="pt-2">
            {!match.winner && match.player1 !== "TBD" && match.player2 !== "TBD" ? (
              <Button
                size="sm"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => handleUpdateMatch(match)}
              >
                <Edit className="w-4 h-4 mr-2" />
                Actualizar Partido
              </Button>
            ) : match.winner ? (
              <Badge className="w-full justify-center bg-primary/20 text-primary border-primary/30">Completado</Badge>
            ) : (
              <Badge variant="secondary" className="w-full justify-center">
                Pendiente
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-8">
      {/* Bracket Display */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((round) => (
          <div key={round} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground text-center">{getRoundName(round)}</h3>
            <div className="space-y-4">
              {getMatchesByRound(round).map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Update Match Modal */}
      <UpdateMatchModal match={selectedMatch} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
