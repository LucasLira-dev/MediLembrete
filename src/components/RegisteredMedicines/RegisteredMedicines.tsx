'use client'

import { useState } from 'react';

import {RiDeleteBin6Line} from 'react-icons/ri';
import { CiClock2 } from "react-icons/ci";
import { LuPill } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import Form from 'next/form'


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


import { API_MideLembrete } from '@/shared/service';
import medicamentoEditado from './actions';


interface IRegisteredMedicinesProps {
    id: number;
    name: string;
    dosagem: number;
    horariosSalvos: string;
    onUpdate: ()=> void;
  }



export const RegisteredMedicines = ({id, name, dosagem, horariosSalvos, onUpdate} :IRegisteredMedicinesProps) => {

    const [tomei, setTomei] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    // const [proximaDose, setProximaDose] = useState<string | null>(null);

    const [open, setOpen] = useState(false);

    const [alerta, setAlerta] = useState<{title: string, description: string} | null>(null);


    const mostrarALert = (title: string,  description: string) => {
        setAlerta({title, description});
    }

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
  <>
    {alerta && (
      <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
        <Alert
        className='bg-[#1E2C48] text-[#FFFFFF] p-4 rounded-md flex flex-col justify-center items-center gap-2'>
          <AlertTitle>{alerta.title}</AlertTitle>
          <AlertDescription>{alerta.description}</AlertDescription>
          <button
          onClick={() => { setAlerta(null); onUpdate(); }}
          className="rounded-md bg-[#16A34A] px-10 py-2 text-center cursor-pointer"> Ok </button>
        </Alert>
      </div>
    )}
    <article
      className="bg-[#1F2937] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[220px] xl:min-w-[300px] flex flex-col gap-4 justify-center rounded-md p-4 mb-4 data-[deleted=true]:hidden"
      data-deleted={isDeleted}
    >
        <div className="flex justify-between items-center">
          <h2 className="mb-1 text-[22px] font-bold px-4">{name}</h2>
          <RiDeleteBin6Line
            size={16}
            className="text-[#F37272] cursor-pointer"
            onClick={() => {
              API_MideLembrete.medicamentos.delete(id)
              mostrarALert("Medicamento Deletado", "O medicamento foi deletado com sucesso")
              setIsDeleted(true);
              onUpdate();
            }}
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
                className="flex gap-2 justify-center items-center text-[12px] font-medium rounded-full bg-[#1E2C48] p-1 w-[100px] text-[#375cc3] data-[tomou=true]:text-[#16A34A]"
              >
                <CiClock2 className="text-[#3B82F6] text-[26px]" />
                <span> {horariosSalvos}</span>
                {tomei && <FaCheck className="text-[#16A34A] text-[26px]"  />}
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
          <Dialog
          open={open}
          onOpenChange={setOpen}>
            <DialogTrigger asChild
            onClick={() => { setOpen(true)}}>
              <div className="flex flex-1 items-center justify-center w-full gap-2 border border-</DialogTrigger>gray-300 rounded-sm p-2 cursor-pointer hover:bg-[#04102E] min-h-[40px]"
              >
                <FaRegEdit />
                <p>Editar</p>
              </div>
            </DialogTrigger>

            <DialogContent
            className='bg-[#1F2937] flex flex-col gap-4'>
              <DialogHeader>
                <DialogTitle> Edite o medicamento </DialogTitle>
                <DialogDescription>
                    <Form
                    action={async (formData: FormData)=>{
                        await medicamentoEditado(formData, id);
                        onUpdate()
                        setOpen(false)
                        mostrarALert("Medicamento Editado", "O medicamento foi editado com sucesso") 
                    } } 
                      >
                        <div className="flex flex-col justify-start pl-2">
                            <label className="font-medium pb-1"> Nome do medicamento </label>
                            <input
                                type="text"
                                placeholder={name}
                                name="nome"
                                required
                                className="bg-[#020817] rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8] placeholder:text-[#737882]"
                            />
                        </div>

                        <div className="flex flex-col pl-2">
                            <label className="font-medium pb-1"> Dosagem </label>
                            <input
                                type="number"
                                placeholder={dosagem.toString()}
                                name="dosagem"
                                required
                                className="bg-[#020817] rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8] placeholder:text-[#737882]"
                            />
                        </div>

                        <div className="flex flex-col pl-2">
                            <label className="font-medium pb-1"> Horários </label>
                            
                                <input
                                    type="time" 
                                    required
                                    name="horario"
                                    className="p-2 bg-[#020817] rounded-md w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8] placeholder:text-[#737882]"
                                />
                        </div>

                        {/* <div>
                            <p
                                className="bg-[#020817] rounded-md p-2 w-full mb-4 flex justify-center items-center gap-2 cursor-pointer hover:bg-[#1D4ED8] hover:text-white"
                                onClick={() => {
                                    // Adicionar novo horário
                                }}
                            >
                                <CiClock2 />
                                <span className="font-medium text-center text-[14px]"> Adicionar horário </span>
                            </p>
                        </div> */}

                        <button
                            type='submit'
                            className='bg-[#3B82F6] text-white mb-2 p-2 rounded-lg w-full cursor-pointer hover:bg-[#1D4ED8] hover:text-white'
                        >
                            Salvar Medicamento
                        </button>
                    </Form>
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
      </>
    );

}