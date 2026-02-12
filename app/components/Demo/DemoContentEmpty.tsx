'use client'

import React from 'react'
import Image from 'next/image'

const DemoContentEmpty = () => {
    return (
        <div className='text-center text-gray-500 mt-20'>
            <div className='w-full flex items-center justify-center flex-col'>
                <Image alt='Image... ' src='/images/icon_small.png' width={100} height={100} />
                <div className='pt-5 flex flex-col justify-center'>
                    <p className='text-[12px]'>
                        <span className='italic f_spartan'>Selamat datang Inggomiu yang mulia... </span>
                        <span>😆😆😆</span>
                    </p>
                    <p className='flex justify-center items-center gap-1 mt-1 f_spartan'>
                        <span className='text-[20px]'>Perkenalkan, saya</span>
                        <span className='font-bold text-[30px]'>
                            <span className='text-ltwo-2'>TotO</span>
                            <span className=''>-L</span>
                        </span>
                    </p>
                    <p className='-mt-2 f_spartan'>AI Assisten Pemerintah Kabupaten Konawe Selatan</p>
                    <p className='pt-5'>Adakah yang ingin anda tanyakan?.......</p>
                </div>

            </div>
        </div>
    )
}

export default DemoContentEmpty
