'use client'

import { useState } from 'react';

import {RiDeleteBin6Line} from 'react-icons/ri';
import { CiClock2 } from "react-icons/ci";
import { LuPill } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";



export const RegisteredMedicines = () => {

    const [tomei, setTomei] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    return(
        
            <article
            className="bg-[#FFFFFF] flex flex-col gap-4 border border-gray-300 rounded-md p-4 mb-4 w-full data-[deleted=true]:hidden"
            data-deleted={isDeleted}>
                <div
                className="flex justify-between items-center">
                    <h2
                    className="mb-1 text-[22px] font-bold px-4"> 
                        teste 
                    </h2>
                    <RiDeleteBin6Line 
                    size={16}
                    className="text-[#F37272] cursor-pointer"
                    onClick={() => setIsDeleted(true)}
                    />
                    
                </div>
                
                <span
                className="flex items-center gap-1 px-4 text-[#6B7280] text-[14px]"> 
                    <LuPill
                    size={14}
                    />
                    <p> 200mg </p>
                </span>

                <div
                className="flex flex-col gap-1 px-4 mb-4">
                    <h3> Horários: </h3>
                    <div
                    data-tomou={tomei}
                    className='flex gap-2 justify-center items-center text-[12px] font-medium rounded-full bg-[#EFF6FF] p-1 w-[80px] text-[#1D4ED8] data-[tomou=true]:text-[#16A34A] data-[tomou=true]:bg-[#D1FAE5]'>
                        <CiClock2
                        className='text-[#1D4ED8]'/>
                        <span> 08:00 </span>
                        {
                            tomei && (
                                <FaCheck
                                className='text-[#16A34A]'/>
                            )
                        }
                        
                    </div>
                    
                </div>

                <div
                className='flex gap-2 justify-start items-center font-medium rounded-full bg-[#EFF6FF] p-1 pl-6 mb-4  text-[#1D4ED8]'>
                    <CiClock2
                    className='text-[#1D4ED8]'/>
                    <p> Próxima dose: 08:00 </p>
                </div>

                <div
                className="flex px-2 gap-4 w-full">
                    <div
                    className="flex items-center justify-center w-full gap-2 mb-2 border  border-gray-300 rounded-sm p-2 cursor-pointer hover:bg-gray-100">
                        <FaRegEdit/>
                        <p> editar </p>
                    </div>

                    <div
                    className="flex items-center justify-center w-full gap-2 mb-2 bg-[#16A34A] rounded-sm text-[#FFFFFF] p-2 cursor-pointer hover:bg-[#15803D]"
                    onClick={() => setTomei(true)}>
                        <FaCheck/>
                        <p> tomei </p>
                    </div>

                </div>
            </article>
    )
}