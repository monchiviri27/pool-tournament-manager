import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function RankingTableSkeleton() {
  return (
    // Contenedor principal para imitar el layout de la página
    <div className="space-y-8">
      
      {/* 1. Esqueletos para las Stats Cards (4 Columnas) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-2/3" /> {/* Título de la tarjeta */}
              <Skeleton className="h-4 w-4 rounded-full" /> {/* Icono */}
            </CardHeader>
            <CardContent>
              <Skeleton className="h-6 w-1/3 mb-1" /> {/* Número/Estadística */}
              <Skeleton className="h-3 w-1/2" /> {/* Descripción */}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 2. Esqueleto para la Tabla/Lista de Ranking */}
      <Card className="bg-card border-border">
        <CardHeader>
          <Skeleton className="h-5 w-1/3" /> {/* Título "Clasificación General" */}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => ( // Renderiza 6 filas de esqueleto
              <div 
                key={i}
                // Imita el flex responsivo de la fila de jugador
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-muted rounded-lg gap-3"
              >
                {/* Bloque 1: Ranking, Avatar y Nombre */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Skeleton className="h-6 w-12 rounded-full" /> {/* Badge de Ranking */}
                  <Skeleton className="w-10 h-10 rounded-full" /> {/* Avatar */}
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" /> {/* Nombre del Jugador */}
                    <Skeleton className="h-3 w-20 sm:hidden" /> {/* Partidos Jugados (Móvil) */}
                  </div>
                </div>

                {/* Bloque 2: Estadísticas (Puntos, Victorias, Ratio) */}
                <div className="flex justify-between w-full sm:w-auto sm:gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50">
                  <div className="w-1/3 text-center sm:w-auto sm:text-right min-w-[60px]">
                    <Skeleton className="h-4 w-10 mb-1 mx-auto sm:mx-0" /> {/* Puntos */}
                    <Skeleton className="h-2 w-8 mx-auto sm:mx-0" /> {/* Puntos Label */}
                  </div>
                  <div className="w-1/3 text-center sm:w-auto sm:text-right min-w-[60px]">
                    <Skeleton className="h-4 w-10 mb-1 mx-auto sm:mx-0" /> {/* Victorias */}
                    <Skeleton className="h-2 w-8 mx-auto sm:mx-0" /> {/* Victorias Label */}
                  </div>
                  <div className="w-1/3 text-center sm:w-auto sm:text-right min-w-[60px]">
                    <Skeleton className="h-4 w-10 mb-1 mx-auto sm:mx-0" /> {/* Ratio */}
                    <Skeleton className="h-2 w-8 mx-auto sm:mx-0" /> {/* Ratio Label */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}