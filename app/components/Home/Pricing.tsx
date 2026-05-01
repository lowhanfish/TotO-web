import Image from 'next/image'
import React from 'react'
import PricingComponent from '../PricingComponent'


const Pricing = () => {
    return (
        <div className="mt-1 px-2 md:px-8">

            <div className="text-center mb-5">
                <p>
                    <span className="text-[42px] font-bold text-ltwo-6"> Pricing</span>
                </p>
                <p>Get the best offer from Toto-L and choose the plan that fits you.</p>
            </div>



            <div className="flex flex-col gap-5 md:flex-row mb-10 mt-25 ">
                <div className='flex-1 w-full px-5'>
                    <PricingComponent lcolor='lfive' />
                </div>
                <div className='flex-1 w-full px-5 pt-20 md:pt-0 '>
                    <PricingComponent lcolor='lfour' />
                </div>
                <div className='flex-1 w-full px-5 pt-20 md:pt-0'>
                    <PricingComponent lcolor='lthree' />
                </div>
            </div>



        </div>
    )
}

export default Pricing
