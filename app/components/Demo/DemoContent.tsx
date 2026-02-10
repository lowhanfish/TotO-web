'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import { BsFillSendArrowUpFill, BsFillPencilFill, BsCopy } from "react-icons/bs";

const DemoContent = () => {

    const [text, setText] = useState("");
    const [isMultiLine, setIsMultiLine] = useState(false); // State untuk kondisi style

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const target = e.target;
        target.style.height = 'auto';

        const newHeight = target.scrollHeight;
        target.style.height = `${Math.min(newHeight, 200)}px`;

        // Logika Kondisi: 
        // Jika scrollHeight > 45 (tinggi awal 1 baris), berarti sudah masuk baris ke-2
        if (newHeight > 45) {
            setIsMultiLine(true);
        } else {
            setIsMultiLine(false);
        }

        setText(target.value);
    };

    return (
        <div className='w-full h-full p-2 flex flex-col gap-5 overflow-hidden mt-5 md:mt-0'>
            <div className='bg-gray-200 rounded-[5] w-full h-full py-2'>
                <div className='overflow-scroll text-[13px] h-full text-lfirst-1 px-7 pt-2 pb-35'>
                    {/* DISINI TEMPAT TEXT */}
                    <div className='flex flex-col gap-2'>
                        <div className='w-fit lg:max-w-[70%] self-end'>

                            <div className='bg-lfirst-3 p-2 rounded-[5]'>
                                <p className='text-lfirst-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis commodi, veritatis dolor totam maxime soluta voluptate ea illo animi suscipit nesciunt. Itaque expedita, commodi temporibus asperiores consequatur id laboriosam?</p>
                            </div>
                            <div className='flex pt-1 justify-end w-full'>
                                <div className='flex gap-2 items-center justify-end pr-2'>
                                    <div className='text-lfirst-3 text-[10px]'>20 Agu 2025 (20:19)</div>
                                    <div className='text-lfirst-3 text-[10px] flex-1'>
                                        <BsFillPencilFill className='cursor-pointer' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-lfirst-6 p-2 rounded-[5] '>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nemo architecto facilis consequatur quis voluptatibus tenetur quasi quod fuga quae similique totam, eius deleniti officiis in maiores expedita, quas magni, inventore natus corporis minus repudiandae necessitatibus. Corporis sint nostrum vero non ullam, repellat dignissimos tempora numquam rem dolores placeat corrupti! Quos a quidem voluptates ad eligendi accusamus distinctio aliquid pariatur accusantium dolore quasi vitae neque suscipit doloribus, alias eum quam reiciendis rem, totam laboriosam sit numquam ipsum, cupiditate odit. Debitis dignissimos officia ipsam! Consequuntur est dolores labore ducimus provident itaque iste perferendis? Veritatis beatae numquam sequi aliquam laudantium dolore dignissimos.
                                </p>

                            </div>
                            <div className='flex pt-1 justify-end w-full'>
                                <div className='flex gap-2 items-center justify-end pr-2'>
                                    <div className='text-lfirst-3 text-[10px]'>20 Agu 2025 (20:19)</div>
                                    <div className='text-lfirst-3 text-[10px] flex-1'>
                                        <BsCopy className='cursor-pointer' />
                                    </div>

                                </div>
                            </div>
                            <div className='w-full border-t-2 border-lfirst-6 border-dotted mt-2'></div>
                        </div>

                    </div>

                </div>
                {/* SUB-BODY2 */}
                <div className='w-full h-full flex flex-col gap-5 justify-center items-center relative'>
                    <div className={`
                        bg-gray-200 rounded-[10] 
                        border-3 border-lfirst-6 w-[85%] 
                        md:w-[70%] 
                        fixed bottom-4 
                        justify-center
                        items-center
                        ${isMultiLine ? 'max-h-30 overflow-scroll' : 'h-12'}
                        
                    `}>
                        <textarea
                            value={text}
                            onChange={handleChange} // Gunakan onChange sebagai standar React
                            rows={1}
                            placeholder="Tanyakan sesuatu..."
                            style={{ minHeight: '45px' }}
                            className='w-full text-[14px] text-lfirst-2 p-3 h-[90%] resize-none focus:outline-none'
                        ></textarea>

                        <div className='flex justify-end pr-2'>
                            <div className='bg-lfirst-2 fixed bottom-6 h-8 w-8 rounded-[50] flex justify-center items-center cursor-pointer border-2 border-lfirst-4'>
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
