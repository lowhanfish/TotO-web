import React from 'react'
import { BsFillSendArrowUpFill } from "react-icons/bs";

const DemoContent = () => {
    return (
        <div className='w-full p-2 h-full flex flex-col gap-5'>
            <div className='bg-gray-300 rounded-[5] h-full'>
                {/* SUB-BODY2 */}
                <div className=' w-full h-full flex flex-col gap-5 justify-center items-center'>
                    <div className='
                                    bg-gray-200 rounded-[10] border-3 border-lfirst-6 w-[85%] md:w-[70%] fixed bottom-4 h-30 
                                    whitespace-pre-wrap leading-6
                                    '>
                        <textarea className='w-full text-[14px] text-lfirst-2 p-3 h-[90%] resize-none focus:outline-none'></textarea>
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
