import React from 'react'
import DemoList from './DemoList';
import DemoContent from './DemoContent';


const DemoBody = () => {
    return (
        <div className='flex flex-col lg:flex-row px-2 pt-10 xl:pt-2 xl:px-10 h-full'>
            <DemoList />
            {/* BODY2 */}
            <DemoContent />

        </div>
    )
}

export default DemoBody
