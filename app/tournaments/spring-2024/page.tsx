import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { TournamentBracket } from "@/components/tournament-bracket"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function SpringTournamentPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Sidebar />

        <main className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="mb-8 mt-12 md:mt-0">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/tournaments">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver a Torneos
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="w-8 h-8 text-primary" />
                  <h1 className="text-3xl font-bold text-foreground">Torneo de Primavera 2024</h1>
                  <Badge className="bg-primary text-primary-foreground">Activo</Badge>
                </div>
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>15 Mar 2024 - En curso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>16 jugadores</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tournament Bracket */}
          <TournamentBracket />
        </main>
      </div>
    </ProtectedRoute>
  )
}
