import { IoMdAddCircleOutline } from "react-icons/io"

export const NoMedication = () => {
    return(
        <div
        className="flex flex-col items-center justify-center gap-2 bg-[#FFFFFF] border border-gray-300 rounded-md p-8 mb-4 w-full">
            <span
            className="rounded-full bg-[#DBEAFE] p-3">
                <IoMdAddCircleOutline 
                size={24}
                className="text-[#2563EB]" 
                />
            </span>
            <h2
            className=" text-[16px] sm:text-[20px] font-medium">
                Nenhum medicamento adicionado
            </h2>

            <p
            className="text-[#6B7280] text-[16px] sm:text-[20px] text-center">
                Adicione seu primeiro medicamento usando o formulário ao lado para começar a gerenciar seus horários.
            </p>
        </div>
    )
}