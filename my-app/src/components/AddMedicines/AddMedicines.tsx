'use client'

import { IoMdAddCircleOutline } from "react-icons/io";

export const AddMedicine = () => {
    return(
        <section
        className="bg-[#FFFFFF] flex flex-col border border-gray-300 rounded-md p-2 mb-4">
            <h2
            className="mb-4 text-[22px] font-medium px-4">    
                Adicionar Medicamento 
            </h2>

            <form
            className="flex flex-col gap-2 px-4 border border-gray-300 rounded-md p-2  mb-4">
                <div>
                    <label
                    className="font-medium pb-1">
                        Nome do Medicamento
                    </label>
                    <input
                        type="text"
                        placeholder="Ex: Paracetamol"
                        required
                        className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                        onChange={(e) => console.log(e.target.value)}
                    />
                </div>

                <div>
                    <label
                    className="font-medium pb-1">
                        Dosagem
                    </label>
                    <input
                        type="text"
                        placeholder="Ex: 500mg"
                        required
                        className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                    />
                </div>

                <div
                className="flex flex-col">
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

                <div>
                    <label
                    className="font-medium pb-1">
                        Horários
                    </label>
                    <input
                        type="time"
                        required
                        className="p-2 border border-gray-300 rounded-md w-full mb-4 focus:outline-none focus:border-1 focus:border-[#1D4ED8]"
                    />
                </div>

                <div>
                    <button
                     className="border border-gray-300 rounded-md p-2 w-full mb-4 flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-100">
                        <IoMdAddCircleOutline/>
                        <p
                        className="font-medium text-center text-[#0F0F10] text-[14px]">
                            Adicionar horário
                        </p>
                    </button>
                </div>

                <div>
                    <button
                    className="bg-[#0F0F10] text-white p-2 rounded-lg w-full cursor-pointer hover:bg-[#383839]">
                        Salvar Medicamento
                    </button>
                </div>
            </form>
        </section>
    )
}