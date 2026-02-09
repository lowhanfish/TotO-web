import React from 'react'

const page = () => {
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col lg:flex-row px-2 pt-10 xl:pt-2 xl:px-10 h-full'>
                <div className='w-90 p-2'>
                    <div className='bg-lfirst-6/15 rounded-[5] h-full'>
                        bb
                    </div>
                </div>
                {/* BODY2 */}
                <div className='w-full p-2 h-full flex flex-col gap-5'>
                    <div className='bg-lfirst-7 rounded-[5] h-full'>





                        {/* SUB-BODY2 */}
                        <div className=' w-full h-full flex flex-col gap-5 justify-center items-center'>
                            <div className=' w-[70%] fixed bottom-5 h-30'>
                                <textarea className='w-full bg-lfirst-6 text-lfirst-2 p-3 h-full rounded-[10] border border-lfirst-5'></textarea>

                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default page
