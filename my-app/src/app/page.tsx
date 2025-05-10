'use client'

// import { AddMedicine } from "@/components/AddMedicines/AddMedicines";
import { Header } from "@/components/Header/Header";
import { RegisteredMedicines } from "@/components/RegisteredMedicines/RegisteredMedicines";
import { NoMedication } from "@/components/NoMedication/NoMedication";

import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";


export default function Home() {

  const [horarios, setHorarios] = useState<string[]>([""]);

  const [horariosSalvos, setHorariosSalvos] = useState<string[]>([]);

  const [name, setName] = useState<string>("");

  const [dosagem, setDosagem] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  
  const handleAddHorario = () => {
          setHorarios([...horarios, ""]);
      }

  return (
    <main 
    className="flex flex-col min-h-screen bg-[#d9dbdd]gap-2">
      <Header />

      <section
      className="flex flex-col mt-4 lg:flex-row lg:ml-4">

        <article
        className="p-4 flex-1">
                <h2
                className=" text-[22px] font-medium p-4">
                    Seus Medicamentos
                </h2>
                {
                    isOpen ? (
                        <RegisteredMedicines 
                        name={name}
                        dosagem={dosagem}
                        horariosSalvos={horariosSalvos}
                        />
                    ) : (
                        <NoMedication/> 
                    )
                }
        </article>


        <article
        className="p-4 flex-2 lg:max-w-[400px]">
                    <article
                    className="bg-[#FFFFFF] flex flex-col border border-gray-300 rounded-md p-4 mb-4">
                        <h2
                        className="mb-4 text-[22px] font-medium px-4">    
                            Adicionar Medicamento 
                        </h2>
            
                        <form
                        className="flex flex-col gap-2 px-4 border border-gray-300 rounded-md p-2  mb-4">
                            <div
                            className="flex flex-col pl-2">
                                <label
                                className="font-medium pb-1">
                                    Nome do Medicamento
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ex: Paracetamol"
                                    required
                                    className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
            
                            <div
                            className="flex flex-col pl-2">
                                <label
                                className="font-medium pb-1">
                                    Dosagem
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ex: 500mg"
                                    required
                                    className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                                    onChange={(e) => setDosagem(parseInt(e.target.value))}
                                />
                            </div>
            
                            <div
                            className="flex flex-col pl-2">
                                <label
                                className="font-medium pb-1">
                                    Frequência
                                </label>
                                <select
                                className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]">
                                    <option value="Diariamente"> Diariamente </option>
                                    <option value="Semanalmente"> Semanalmente </option>
                                    <option value="Mensalmente"> Mensalmente </option>
                                </select>
                            </div>
            
                            <div
                            className="pl-2">
                                <label
                                className="font-medium pb-1">
                                    Horários
                                </label>
                                    {horarios.map((horario, index)=>(
                                        <input
                                        key={index}
                                        value={horario}
                                        type="time"
                                        onChange={(e) => {
                                            setHorariosSalvos(prev => {
                                                const updatedHorarios = [...prev];
                                                updatedHorarios[index] = e.target.value;
                                                return updatedHorarios;
                                            })
                                        }}
                                        required
                                        className="p-2 border border-gray-300 rounded-md w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                                    />
                                ))}
                            </div>
            
                            <div>
                                <p
                                className="border border-gray-300 rounded-md p-2 w-full mb-4 flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-100"
                                onClick={handleAddHorario}>
                                    <IoMdAddCircleOutline/>
                                    <p
                                    className="font-medium text-center text-[#0F0F10] text-[14px]">
                                        Adicionar horário
                                    </p>
                                </p>
                            </div>
            
                            <div>
                                <button
                                onClick={() => setIsOpen(true)}
                                className="bg-[#0F0F10] text-white p-2 rounded-lg w-full cursor-pointer hover:bg-[#383839]"
                                >
                                    Salvar Medicamento
                                </button>
                            </div>
                        </form>
                    </article>
        </article>


      </section>
      
    </main>
  );
}
