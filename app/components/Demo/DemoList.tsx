import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

const DemoList = () => {
    return (
        <div className='w-90 p-2'>
            <div className='bg-lfirst-6/15 rounded-[5] h-full  overflow-scroll'>

                <div className='px-3 py-2 flex flex-col gap-2 pt-7 border-t-2 border-lfirst-6/20 border-dashed'>
                    <button className='bg-ltwo-1 p-2 rounded-2xl w-full flex justify-center items-center gap-2 hover:bg-ltwo-2/80 cursor-pointer'>
                        <span>
                            <span className='text-[12px] font-semibold'>Buat Demo Baru</span>
                            ✏️
                        </span>
                    </button>
                </div>

                <div className='px-3 py-2 border-b-2 border-lfirst-6/20 border-dashed pb-4'>
                    <input placeholder='Cari Riwayat...' type="text" className='bg-lfirst-7/20 h-10 w-full rounded-2xl text-white text-[12px] py-2 pl-5 pr-2' />
                </div>

                {

                    [...Array(30)].map((_, index) => (

                        <div key={index} className='flex p-2 pl-5 border-b border-lfirst-6/20 gap-2 items-center justify-between'>
                            <div className='text-[12px] line-clamp-2 cursor-pointer'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis tenetur fuga reprehenderit corrupti fugit suscipit similique vitae laboriosam a inventore, dolorem eligendi ducimus, consequatur sint veritatis modi doloribus? Optio, laboriosam.
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    ))

                }


                <div className='flex p-2 border-b border-lfirst-6/20 gap-2 items-center justify-center cursor-pointer mb-10'>
                    <p>Load More ..</p>
                </div>

            </div>
        </div>
    )
}

export default DemoList
