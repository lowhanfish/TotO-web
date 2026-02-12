'use client'

import React from 'react'
import DemoList from './DemoList';
import DemoContent from './DemoContent';

import { v4 as uuidv4 } from 'uuid'
import { useRouter, useSearchParams } from 'next/navigation'


const DemoBody = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const activeSearcId = searchParams.get('session')

    const handleCreateNew = (id: string) => {
        const newId = uuidv4();
        router.push(`/?session=${id}`)


    }



    return (
        <div className='flex flex-col lg:flex-row px-2 pt-10 xl:pt-2 xl:px-10 h-full'>
            <DemoList />
            {/* BODY2 */}
            <DemoContent />

        </div>
    )
}

export default DemoBody
