"use client";

// import { AddMedicine } from "@/components/AddMedicines/AddMedicines";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { RegisteredMedicines } from "@/components/RegisteredMedicines/RegisteredMedicines";
import { NoMedication } from "@/components/NoMedication/NoMedication";


import { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

import { API_MideLembrete } from "@/shared/service/index";
import Loading from "@/components/Loading/loading";

export default function Home() {
    const [horarios, setHorarios] = useState(0);

  //   const [horariosSalvos, setHorariosSalvos] = useState<string[]>([]);

    const [name, setName] = useState<string>("");

    const [dosagem, setDosagem] = useState(0);

  //   const [isOpen, setIsOpen] = useState(true);

  //   const handleAddHorario = () => {
  //           setHorarios([...horarios, ""]);
  //       }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [medicamentos, setMedicamentos] = useState<any[] | undefined>(
    undefined
  );

  useEffect(() => {
    API_MideLembrete.getAll()
      .then(setMedicamentos)
      .catch(() => console.log("Erro"));
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-[#d9dbdd]gap-2">
      <Header />

      <section className="flex flex-col mt-4 lg:flex-row lg:ml-4">
        <article className="p-4 flex-1">
          <h2 className=" text-[22px] font-medium p-4">Seus Medicamentos</h2>

          <div
          className="flex flex-col sm:flex-row gap-2 min-h-[200px]">
          {medicamentos === undefined ? (
            <div className="w-full h-full">
              <Loading className="h-full" />
            </div>
          ) : medicamentos.length > 0 ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            medicamentos.map((med: any, id: number) => (
            
              <RegisteredMedicines
                key={id}
                name={med.nome_medicamento}
                dosagem={med.dosagem_medicamento}
                horariosSalvos={med.horarios_medicamento}
              />
              
            ))
          ) : (
            <NoMedication />
          )}
          </div>
        </article>

        <article className="p-4 flex-2 lg:max-w-[400px]">
          <article className="bg-[#1f2937] flex flex-col rounded-md p-4 mb-4">
            <h2 className="mb-4 text-[22px] font-medium px-4">
              Adicionar Medicamento
            </h2>

            <form 
            className="flex flex-col gap-2 px-4 bg-[#04102E] rounded-md p-2  mb-4"
            onSubmit={async (e) => {
                e.preventDefault();

                const novoMedicamento = {
                  nome_medicamento: name,
                  dosagem_medicamento: dosagem,
                  horarios_medicamento: horarios
                }

                await API_MideLembrete.create(novoMedicamento)

            }}>
              <div className="flex flex-col pl-2">
                <label className="font-medium pb-1 mt-2">
                  Nome do Medicamento
                </label>
                <input
                  type="text"
                  placeholder="Ex: Paracetamol"
                  required
                  className="bg-[#020817] rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col pl-2">
                <label className="font-medium pb-1">Dosagem</label>
                <input
                  type="text"
                  placeholder="Ex: 500mg"
                  required
                  className="bg-[#020817] rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                  onChange={(e) => setDosagem(parseInt(e.target.value))}
                />
              </div>

              <div className="flex flex-col pl-2">
                <label className="font-medium pb-1">Frequência</label>
                <select className="bg-[#020817]  rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]">
                  <option value="Diariamente"> Diariamente </option>
                  <option value="Semanalmente"> Semanalmente </option>
                  <option value="Mensalmente"> Mensalmente </option>
                </select>
              </div>

              <div className="pl-2">
                <label className="font-medium pb-1">Horários</label>
                <input type="time" 
                className="p-2 bg-[#020817] rounded-md w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                onChange={(e)=> setHorarios(parseInt(e.target.value))}/>
              </div>

              <div>
                <div className="bg-[#020817] rounded-md p-2 w-full mb-4 flex justify-center items-center gap-2 cursor-pointer hover:bg-[#1D4ED8] hover:text-white">
                  <IoMdAddCircleOutline />
                  <p className="font-medium text-center text-[14px]">
                    Adicionar horário
                  </p>
                </div>
              </div>

              <div>
                <button type="submit"
                  className="bg-[#3B82F6] text-white mb-2 p-2 rounded-lg w-full cursor-pointer hover:bg-[#1D4ED8] hover:text-white"
                >
                  Salvar Medicamento
                </button>
              </div>
            </form>
          </article>
        </article>
      </section>

      <Footer />
    </main>
  );
}
