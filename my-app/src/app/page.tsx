import { AddMedicine } from "@/components/AddMedicines/AddMedicines";
import { Header } from "@/components/Header/Header";


export default function Home() {
  return (
    <main 
    className="flex flex-col min-h-screen bg-[#d9dbdd]gap-6">
      <Header />

      <section
      className="p-4">
        <AddMedicine />
      </section>
      
    </main>
  );
}
