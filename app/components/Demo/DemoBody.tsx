'use client'

import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query' // Tambahkan ini
import { GetSessions } from '@/app/services/api' // Import fungsi GetSessions dari api.ts Bapak

import DemoList from './DemoList';
import DemoContent from './DemoContent';



const DemoBody = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeSessionId = searchParams.get('session');

    // 1. Ganti state manual dengan useQuery untuk tarik data dari MySQL via FastAPI
    const { data: histories = [], refetch } = useQuery({
        queryKey: ['sessions'],
        queryFn: GetSessions,
    });

    const handleCreateNew = () => {
        const newId = uuidv4();
        router.push(`/demo?session=${newId}`);
    };

    return (
        <div className='flex flex-col lg:flex-row px-2 pt-10 xl:pt-2 xl:px-10 h-full'>
            <DemoList
                histories={histories} // Sekarang isinya sudah data dari API
                activeSessionId={activeSessionId}
                onCreateNew={handleCreateNew}
            />
            {/* Tambahkan key dan onNewMessageSaved agar sinkron */}
            <DemoContent
                key={activeSessionId}
                sessionId={activeSessionId}
                onNewMessageSaved={refetch}
            />
        </div>
    )
}

export default DemoBody