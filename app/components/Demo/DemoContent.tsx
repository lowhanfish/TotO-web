'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import { BsFillSendArrowUpFill } from "react-icons/bs";

const DemoContent = () => {

    const [text, setText] = useState("");

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const target = e.target; // Langsung akses target

        // Logika Auto-height
        target.style.height = 'auto';
        const newHeight = Math.min(target.scrollHeight, 200);
        target.style.height = `${newHeight}px`;

        setText(target.value);
    };

    return (
        <div className='w-full  p-2 flex flex-col gap-5 overflow-hidden'>
            <div className='bg-gray-200 rounded-[5] w-full h-full'>
                <div className='overflow-scroll h-full'>
                    {
                        [...Array(90)].map((_, index) => (
                            <p key={index}>asdas {index}</p>
                        ))
                    }

                </div>
                {/* SUB-BODY2 */}
                <div className=' w-full h-full flex flex-col gap-5 justify-center items-center'>
                    <div className='
                        bg-gray-200 rounded-[10] 
                        border-3 border-lfirst-6 w-[85%] 
                        md:w-[70%] 
                        fixed bottom-4 
                        max-h-30 
                        overflow-scroll 
                    '>
                        <textarea
                            value={text}
                            onChange={handleChange} // Gunakan onChange sebagai standar React
                            rows={1}
                            placeholder="Ketik pesan..."
                            style={{ minHeight: '45px' }}
                            className='w-full text-[14px] text-lfirst-2 p-3 h-[90%] resize-none focus:outline-none'
                        ></textarea>
                        <div className='flex justify-end -mt-8 mr-3'>
                            <div className='bg-lfirst-2 h-8 w-8 rounded-[50] flex justify-center items-center cursor-pointer border-2 border-lfirst-4'>
                                <BsFillSendArrowUpFill className='text-lfirst-6' />

                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default DemoContent
