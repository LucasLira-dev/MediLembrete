'use client'

import { useState } from 'react';

import {RiDeleteBin6Line} from 'react-icons/ri';
import { CiClock2 } from "react-icons/ci";
import { LuPill } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



interface IRegisteredMedicinesProps {
    name: string;
    dosagem: number;
    horariosSalvos: string[]
}



export const RegisteredMedicines = ({name, dosagem, horariosSalvos} :IRegisteredMedicinesProps) => {

    const [tomei, setTomei] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    // const [proximaDose, setProximaDose] = useState<string | null>(null);

    // useEffect(() => {
    //     const calcularProximaDose = () => {
    //         const agora = new Date();
    //         const horariosOrdenados = horariosSalvos
    //             .map(horario => {
    //                 const [horas, minutos] = horario.split(':').map(Number);
    //                 const horarioDate = new Date();
    //                 horarioDate.setHours(horas, minutos, 0, 0);
    //                 return horarioDate;
    //             })
    //             .sort((a, b) => a.getTime() - b.getTime());

    //         const proximoHorario = horariosOrdenados.find(horario => horario > agora);
    //         if (proximoHorario) {
    //             setProximaDose(proximoHorario.toTimeString().slice(0, 5)); // Formato HH:mm
    //         } else if (horariosOrdenados.length > 0) {
    //             // Se todos os horários já passaram, pega o primeiro do próximo dia
    //             setProximaDose(horariosOrdenados[0].toTimeString().slice(0, 5));
    //         } else {
    //             setProximaDose(null);
    //         }
    //     };

    //     calcularProximaDose();
    // }, [horariosSalvos]);


    return (
      <article
        className="bg-[#1F2937] flex flex-col gap-4 rounded-md p-4 mb-4 w-full data-[deleted=true]:hidden"
        data-deleted={isDeleted}
      >
        <div className="flex justify-between items-center">
          <h2 className="mb-1 text-[22px] font-bold px-4">{name}</h2>
          <RiDeleteBin6Line
            size={16}
            className="text-[#F37272] cursor-pointer"
            onClick={() => setIsDeleted(true)}
          />
        </div>

        <span className="flex items-center gap-1 px-4 text-[#6B7280] text-[14px]">
          <LuPill size={14} />
          <p> {dosagem}mg </p>
        </span>

        <div className="flex flex-col gap-1 px-4 mb-4">
          <h3> Horários: </h3>
          <div className="flex gap-2">
           
              <div
                data-tomou={tomei}
                className="flex gap-2 justify-center items-center text-[12px] font-medium rounded-full bg-[#1E2C48] p-1 w-[80px] text-[#375cc3] data-[tomou=true]:text-[#16A34A]"
              >
                <CiClock2 className="text-[#3B82F6]" />
                <span> {horariosSalvos}</span>
                {tomei && <FaCheck className="text-[#16A34A]" />}
              </div>
            
          </div>
        </div>

        <div className="flex gap-2  items-center font-medium rounded-full bg-[#1E2C48] p-1 pl-6 mb-4 md:m-w-[200px]">
          <CiClock2 className="text-[#3B82F6]" />
          <div className="flex ">
            {/* <p> Próxima dose: {tomei ? <p> Parabens </p> : proximaDose} </p> */}
          </div>
        </div>


        <div className="flex px-2 gap-4 w-full">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-1 items-center justify-center w-full gap-2 border border-gray-300 rounded-sm p-2 cursor-pointer hover:bg-[#04102E] min-h-[40px]">
                <FaRegEdit />
                <p>Editar</p>
              </div>
            </DialogTrigger>

            <DialogContent
            className='bg-[#1F2937] flex flex-col gap-4'>
              <DialogHeader>
                <DialogTitle> Edite o medicamento </DialogTitle>
                <DialogDescription>
                    <form>
                        <div className="flex flex-col justify-start pl-2">
                            <label className="font-medium pb-1"> Nome do medicamento </label>
                            <input
                                type="text"
                                placeholder={name}
                                onChange={() => {}} // Adicione um handler real para atualizar o nome
                                className="bg-[#020817] rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8] placeholder:text-[#737882]"
                            />
                        </div>

                        <div className="flex flex-col pl-2">
                            <label className="font-medium pb-1"> Dosagem </label>
                            <input
                                type="number"
                                placeholder={dosagem.toString()}
                                onChange={() => {}} // Adicione um handler real para atualizar a dosagem
                                className="bg-[#020817] rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8] placeholder:text-[#737882]"
                            />
                        </div>

                        <div className="flex flex-col pl-2">
                            <label className="font-medium pb-1"> Horários </label>
                            
                                <input
                                    
                                    type="time"
                                    onChange={() => {}} // Adicione um handler real para atualizar o horário
                                    required
                                    className="p-2 bg-[#020817] rounded-md w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8] placeholder:text-[#737882]"
                                />
                        </div>

                        <div>
                            <p
                                className="bg-[#020817] rounded-md p-2 w-full mb-4 flex justify-center items-center gap-2 cursor-pointer hover:bg-[#1D4ED8] hover:text-white"
                                onClick={() => {
                                    // Adicionar novo horário
                                }}
                            >
                                <CiClock2 />
                                <span className="font-medium text-center text-[14px]"> Adicionar horário </span>
                            </p>
                        </div>

                        <button
                            type='submit'
                            className='bg-[#3B82F6] text-white mb-2 p-2 rounded-lg w-full cursor-pointer hover:bg-[#1D4ED8] hover:text-white'
                        >
                            Salvar Medicamento
                        </button>
                    </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div
            className="flex flex-1 items-center justify-center w-full gap-2 bg-[#16A34A] rounded-sm text-[#FFFFFF] p-2 cursor-pointer hover:bg-[#15803D] min-h-[40px]"
            onClick={() => setTomei(true)}
          >
            <FaCheck />
            <p>tomei</p>
          </div>
        </div>
      </article>
    );
}