"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trophy } from "lucide-react"
import { showSuccessToast, showErrorToast } from "@/components/ui/toast-utils"

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

interface UpdateMatchModalProps {
  match: Match | null
  isOpen: boolean
  onClose: () => void
}

export function UpdateMatchModal({ match, isOpen, onClose }: UpdateMatchModalProps) {
  const [score1, setScore1] = useState("")
  const [score2, setScore2] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (match) {
      setScore1(match.score1?.toString() || "")
      setScore2(match.score2?.toString() || "")
    }
  }, [match])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const s1 = Number.parseInt(score1)
    const s2 = Number.parseInt(score2)

    if (isNaN(s1) || isNaN(s2) || s1 < 0 || s2 < 0) {
      showErrorToast("Por favor ingresa puntuaciones válidas (números positivos)")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Here you would typically update the match in your database
      console.log("Updating match:", {
        matchId: match?.id,
        score1: s1,
        score2: s2,
        winner: s1 > s2 ? match?.player1 : match?.player2,
      })

      const winner = s1 > s2 ? match?.player1 : match?.player2
      showSuccessToast(
        `Resultado guardado: ${match?.player1} ${s1} - ${s2} ${match?.player2}. Ganador: ${winner}`,
        "Resultado actualizado",
      )

      onClose()
    } catch (error) {
      showErrorToast("Error al guardar el resultado. Inténtalo de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!match) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-card-foreground">
            <Trophy className="w-5 h-5 text-primary" />
            Actualizar Resultado del Partido
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Player 1 Score */}
          <div className="space-y-2">
            <Label htmlFor="score1" className="text-card-foreground font-medium">
              {match.player1}
            </Label>
            <Input
              id="score1"
              type="number"
              min="0"
              max="15"
              value={score1}
              onChange={(e) => setScore1(e.target.value)}
              placeholder="Puntuación"
              className="bg-input border-border text-foreground"
              disabled={isLoading}
            />
          </div>

          {/* VS Divider */}
          <div className="text-center">
            <span className="text-muted-foreground font-medium">VS</span>
          </div>

          {/* Player 2 Score */}
          <div className="space-y-2">
            <Label htmlFor="score2" className="text-card-foreground font-medium">
              {match.player2}
            </Label>
            <Input
              id="score2"
              type="number"
              min="0"
              max="15"
              value={score2}
              onChange={(e) => setScore2(e.target.value)}
              placeholder="Puntuación"
              className="bg-input border-border text-foreground"
              disabled={isLoading}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent"
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              loading={isLoading}
            >
              Guardar Resultado
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
