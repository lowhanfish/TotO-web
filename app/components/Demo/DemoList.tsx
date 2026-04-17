'use client'

import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from 'next/link';

interface HistoryItem {
    session_id: string;
    title: string;
}

interface DemoListProps {
    histories: HistoryItem[];
    activeSessionId: string | null;
    onCreateNew: () => void;
}

const DemoList = ({ histories, activeSessionId, onCreateNew }: DemoListProps) => {
    return (
        <div className='w-90 p-2'>
            <div className='bg-lfirst-6/15 rounded-[5] h-full overflow-y-auto scrollbar-hide'>

                <div className='px-3 py-2 flex flex-col gap-2 pt-7 border-t-2 border-lfirst-6/20 border-dashed'>
                    <button
                        onClick={onCreateNew}
                        className='bg-ltwo-1 p-2 rounded-2xl w-full flex justify-center items-center gap-2 hover:bg-ltwo-2/80 cursor-pointer transition-all'
                    >
                        <span className='text-[12px] font-semibold'>Buat Demo Baru</span>
                        <span>✏️</span>
                    </button>
                </div>

                <div className='px-3 py-2 border-b-2 border-lfirst-6/20 border-dashed pb-4'>
                    <input
                        placeholder='Cari Riwayat...'
                        type="text"
                        className='bg-lfirst-7/20 h-10 w-full rounded-2xl text-white text-[12px] py-2 pl-5 pr-2 focus:outline-none focus:ring-1 focus:ring-ltwo-1'
                    />
                </div>

                <div className='flex flex-col'>

                    <Link

                        // Sesuaikan path "/demo" dengan rute Next.js Bapak
                        href={`/demo`}
                        className={`flex p-2 pl-5 border-b border-lfirst-6/20 gap-2 items-center justify-between hover:bg-lfirst-6/10 transition-colors bg-lfirst-6/30 border-l-4 border-l-ltwo-1'`}
                    >
                        <div className='text-[12px] line-clamp-2 cursor-pointer'>
                            contoh percakapan
                        </div>
                        <div className='flex items-center cursor-pointer p-1 hover:bg-white/10 rounded-full'>
                            <BsThreeDotsVertical />
                        </div>
                    </Link>

                </div>

                {/* <div className='flex p-2 border-b border-lfirst-6/20 gap-2 items-center justify-center cursor-pointer mb-10 hover:text-ltwo-1 transition-colors'>
                    <p className='text-[12px]'>Load More ..</p>
                </div> */}
            </div>
        </div>
    );
};

export default DemoList;