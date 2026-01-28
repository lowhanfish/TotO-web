"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { BsCaretDown } from "react-icons/bs";



const menuList = [
    {
        title: "Product",
        url: "/",
        children: [
            { title: "API-L" },
            { title: "Public Services" },
        ],
    },
    {
        title: "Docs",
        url: "/docs",
        children: [
            { title: "API-L Docs" },
            { title: "Embedding Data" },
            { title: "Public Services Docs" },
        ],
    },
    {
        title: "Pricing",
        url: "/pricing",
    },
    {
        title: "Version",
        url: "/versions",
    },
    {
        title: "Contact",
        url: "/contact",
    },
]



const Header = () => {



    return (
        <div className='bg-[#151515]'>
            <div className='flex h-20 px-5 lg:px-9 xl:px-27.5'>
                <div className='flex-1'>
                    <div className='h-full flex items-center font-bold text-[40px] f_spartan'>
                        <span className='text-lfirst-4'>TotO</span>
                        <span className='text-ltwo-5'>-L</span>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='flex justify-center items-center h-full'>
                        <div className='flex gap-5 font-light text-[15px] h-full'>
                            {
                                menuList.map((item, index) => (
                                    <ItemList key={item.title} items={item} />
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className='flex-1 h-full w-full flex justify-end items-center'>
                    {/* <div className='flex justify-end items-center'> */}
                    <button className='btn-primary'>
                        Login
                    </button>
                    {/* </div> */}
                </div>

            </div>
        </div>
    )
}

type itemProps = {
    title: string,
    children?: itemProps[],
    url?: string,
}

// type itemsProps = {
//     items: itemProps[]
// }

const ItemList = ({ items }: { items: itemProps }) => {
    const [isOpen, SetIsopen] = useState(false);
    return (
        <div onMouseLeave={() => SetIsopen(false)} onMouseEnter={() => SetIsopen(true)} className='cursor-pointer h-full flex justify-center items-center text-lfirst-6'>
            {
                items.children && items.children.length > 0 ? (
                    <div className='flex items-center justify-center gap-2'>
                        <p className='h-full'>{items.title}</p>
                        {
                            items.children && items.children.length > 0 && (
                                <BsCaretDown className={`text-[12px] ${!isOpen && "-rotate-90"}`} />
                            )
                        }
                    </div>
                ) : (
                    <Link href={items.url || "/"} className='flex items-center justify-center gap-2 '>
                        <p className='h-full '>{items.title}</p>
                        {
                            items.children && items.children.length > 0 && (
                                <BsCaretDown className='text-[12px]' />
                            )
                        }
                    </Link>
                )
            }

            {
                items.children && items.children.length > 0 && isOpen && (
                    <div className='absolute w-45 bg-lfirst-2 rounded-b-sm top-20'>
                        <ul className='rounded-b-lg'>
                            {
                                items.children.map((items, index) => (
                                    <li key={items.title} className='py-2 px-3 text-[13px] border-t-[0.5] border-lfirst-3 font-light text-lfirst-7'>{items.title}</li>
                                ))
                            }
                        </ul>
                    </div>

                )
            }


        </div>


    )


}



export default Header
