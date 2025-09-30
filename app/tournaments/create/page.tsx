// app/tournaments/create/page.tsx

// Importa el componente que te generé en el paso anterior
import CreateTournamentForm from '@/components/CreateTournamentForm'; 
import { Sidebar } from "@/components/sidebar"; // Asumo que quieres la barra lateral

export default function CreateTournamentPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 md:pl-64">
        <CreateTournamentForm /> 
      </main>
    </div>
  );
}