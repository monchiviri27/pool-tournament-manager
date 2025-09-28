import { Sidebar } from "@/components/sidebar"
import { PlayerProfile } from "@/components/player-profile"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface PlayerPageProps {
  params: {
    id: string
  }
}

export default function PlayerPage({ params }: PlayerPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="md:ml-64 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 mt-12 md:mt-0">
          <Link href="/players">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Jugadores
            </Button>
          </Link>
        </div>

        {/* Player Profile */}
        <PlayerProfile playerId={params.id} />
      </main>
    </div>
  )
}
