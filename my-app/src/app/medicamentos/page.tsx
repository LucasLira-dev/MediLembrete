"use client";

// import { AddMedicine } from "@/components/AddMedicines/AddMedicines";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { RegisteredMedicines } from "@/components/RegisteredMedicines/RegisteredMedicines";
import { NoMedication } from "@/components/NoMedication/NoMedication";

import { useEffect, useState, useCallback } from "react";
// import { IoMdAddCircleOutline } from "react-icons/io";

import { API_MideLembrete } from "@/shared/service/index";
import Loading from "@/components/Loading/Loading";
 import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import Form from 'next/form'


import cadastrarMedicamento from "./actions";

export default function Home() {
  
  const [alerta, setAlerta] = useState<{title: string, description: string} | null>(null);

  const userId = localStorage.getItem("userId");
  
  
  const mostrarALert = (title: string,  description: string) => {
    setAlerta({title, description});
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [medicamentos, setMedicamentos] = useState<any[] | undefined>(
    undefined
  );


  const buscarMedicamentos = useCallback(async () => {
    try {
      const response = await API_MideLembrete.medicamentos.getAllByUser(Number(userId));
      setMedicamentos(response);
    } catch (error) {
      console.error("Erro ao buscar medicamentos:", error);
    }
  }, [userId]);

  useEffect(() => {
    buscarMedicamentos()
  }, [buscarMedicamentos]);

  return (
    <>
    {alerta && (
          <div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
            <Alert
            className='bg-[#1E2C48] text-[#FFFFFF] p-4 rounded-md flex flex-col justify-center items-center gap-2'>
              <AlertTitle>{alerta.title}</AlertTitle>
              <AlertDescription>{alerta.description}</AlertDescription>
              <button
              onClick={()=>setAlerta(null)}
              className="rounded-md bg-[#16A34A] px-10 py-2 text-center cursor-pointer"> Ok </button>
            </Alert>
          </div>
        )}
    <main className="flex flex-col min-h-screen gap-2">
      <Header />

      <section className="flex flex-col mt-4 lg:flex-row lg:ml-4">
        <article className="p-4 flex-1">
          <h2 className=" text-[22px] font-medium p-4">Seus Medicamentos</h2>

          <div className="flex sm:justify-center sm:items-center md:items-center md:justify-start flex-col sm:flex-row sm:flex-wrap gap-2 min-h-[200px]">
            {medicamentos === undefined ? (
              <div className="w-full h-full">
                <Loading className="h-full" />
              </div>
            ) : medicamentos.length > 0 ? (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              medicamentos.map((med: any, id: number) => (
                <RegisteredMedicines
                  key={id}
                  id={med.id}
                  name={med.nome_medicamento}
                  dosagem={med.dosagem_medicamento}
                  horariosSalvos={med.horarios_medicamento}
                  onUpdate={buscarMedicamentos}
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

            <Form
              action={async (formData: FormData) => {
                const userId = localStorage.getItem("userId");
                if (userId) {
                   formData.append("userId", userId);
                }
                await cadastrarMedicamento(formData);
                buscarMedicamentos();
                mostrarALert("Medicamento cadastrado com sucesso!", "O medicamento foi adicionado à sua lista.");
                
              }}
              className="flex flex-col gap-2 px-4 bg-[#04102E] rounded-md p-2  mb-4"
            >
              <div className="flex flex-col pl-2">
                <label className="font-medium pb-1 mt-2">
                  Nome do Medicamento
                </label>
                <input
                  type="text"
                  placeholder="Ex: Paracetamol"
                  required
                  name="nome"
                  className="bg-[#020817] rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                />
              </div>

              <div className="flex flex-col pl-2">
                <label className="font-medium pb-1">Dosagem</label>
                <input
                  type="number"
                  placeholder="Ex: 500mg"
                  required
                  name="dosagem"
                  className="bg-[#020817] rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
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
                <input
                  type="time"
                  name="horario"
                  className="p-2 bg-[#020817] rounded-md w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                />
              </div>

              {/* <div>
                <div className="bg-[#020817] rounded-md p-2 w-full mb-4 flex justify-center items-center gap-2 cursor-pointer hover:bg-[#1D4ED8] hover:text-white">
                  <IoMdAddCircleOutline />
                  <p className="font-medium text-center text-[14px]">
                    Adicionar horário
                  </p>
                </div>
              </div> */}

              <div>
                <button
                  type="submit"
                  className="bg-[#3B82F6] text-white mb-2 p-2 rounded-lg w-full cursor-pointer hover:bg-[#1D4ED8] hover:text-white"
                >
                  Salvar Medicamento
                </button>
              </div>
            </Form>
          </article>
        </article>
      </section>

      <Footer />
    </main>
    </>
  );
}
