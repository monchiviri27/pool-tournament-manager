// app/players/add/page.tsx

// Importa el componente que te generé en el paso anterior
import AddPlayerForm from '@/components/AddPlayerForm'; 
import { Sidebar } from "@/components/sidebar"; // Asumo que quieres la barra lateral

export default function AddPlayerPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 md:pl-64">
        <AddPlayerForm /> 
      </main>
    </div>
  );
}