import React from 'react'


type PricingComponentProps = {
    lcolor: string,
}


const PricingComponent = ({ lcolor }: PricingComponentProps) => {
    return (
        <div className='bg-lfirst-3 rounded-[18px] shadow-xl'>
            <div className='h-35 -mx-4 bg-linear-to-t from-lfive-6/50 to-white relative flex justify-center rounded-[18px] '>
                <div className={`h-30 w-30 bg-${lcolor}-5 absolute -mt-15 rounded-full flex flex-col justify-center items-center border-5 border-lfirst-6`} >
                    <div className='text-shadow-lg'>
                        <span className='text-[40px] font-bold'>149</span>
                        <span className='text-[18px]'>Rb</span>
                    </div>
                    <div className='-mt-3 text-[10px] text-shadow-md'>Per-Bulan</div>
                </div>
                <div className='mt-15 text-center '>
                    <p className='text-lfive-2/50 text-[25px] text-shadow-sm font-bold'>STARTER</p>
                    <p className='text-[15px] text-lfirst-3 -mt-1 font-light'>Untuk UMKM & creator</p>
                </div>

            </div>
            <div className='p-5'>
                <ul className='list-disc pl-5 font-light text-[14px]'>
                    <li>AI Assistant (basic)</li>
                    <li>Knowledge Base (RAG ringan)</li>
                    <li>TikTok Auto Reply (overlay)</li>
                    <li>Web Chat Widget</li>
                    <li>1–2 channel</li>
                    <li> Basic analytics</li>
                </ul>
            </div>
        </div>
    )
}

export default PricingComponent
