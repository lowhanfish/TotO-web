"use client"

import { useState } from 'react'
import Link from 'next/link';
import { BsCaretDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";


const menuList = [
    {
        title: "Product",
        url: "/",
        children: [
            {
                title: "API-L",
                url: "/api-l"
            },
            {
                title: "Public Services",
                url: "/public-services"
            },
        ],
    },
    {
        title: "Docs",
        url: "/docs",
        children: [
            {
                title: "API-L Docs",
                url: "/api-l-docs"
            },
            {
                title: "Embedding Data",
                url: "/embedding-data"
            },
            {
                title: "Public Services Docs",
                url: "/public-services-docs"
            },
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
        <div>

            <div className='bg-[#151515] w-full z-9999'>
                <MenuDesktop />
                <MobileMenu />
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

const MenuDesktop = () => {
    return (
        <div className='hidden md:block'>
            <div className='flex h-20 px-5 lg:px-9 xl:px-27.5'>
                <div className='flex-1'>
                    <Link href="/" className='h-full flex items-center font-bold text-[40px] f_spartan cursor-pointer'>
                        <span className='text-lfirst-4'>TotO</span>
                        <span className='text-ltwo-5'>-L</span>
                    </Link>
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

const MobileMenu = () => {

    const [isOpen, SetIsOpen] = useState(false);

    return (
        <div className='block md:hidden z-9999'>
            <div className='flex w-full h-20 px-5 lg:px-9 xl:px-27.5  fixed bg-lfirst-1 z-9999'>
                <div className='flex w-full items-center cursor-pointer' onClick={() => SetIsOpen(!isOpen)}>
                    <GiHamburgerMenu className='text-3xl' />
                </div>

                <div className='w-full flex justify-end'>
                    <Link href="/" className='flex items-center font-bold text-[22px] f_spartan'>
                        <span className='text-lfirst-4'>TotO</span>
                        <span className='text-ltwo-5'>-L</span>
                    </Link>
                </div>
            </div>
            {
                isOpen && (
                    <div className='flex flex-col h-full w-[80%] bg-lfirst-2 absolute top-20'>
                        {
                            menuList.map((item, index) => (
                                <ItemMobileList key={item.title} item={item} />
                            ))
                        }

                        <div className='w-full pt-6 flex items-center justify-center'>
                            <button className='w-full mx-5 bg-ltwo-3 h-11.25 rounded-[25]'>
                                Login
                            </button>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

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

const ItemMobileList = ({ item }: { item: itemProps }) => {
    const [isOpen, SetIsOpen] = useState(false);

    return (
        <div>

            <div className='flex w-full flex-col gap 3 px-5'>
                <div onClick={() => SetIsOpen(!isOpen)} className='h-12.25 border-dashed border-b-[0.5px] border-lfirst-4 w-full flex items-center cursor-pointer'>
                    <div className='flex items-center w-full'>
                        <p className='text-[18px] font-bold w-full'>{item.title}</p>
                        {
                            item.children && item.children.length > 0 && (
                                <BsCaretDown className={`justify-end  ${isOpen ? 'rotate-0' : '-rotate-90'} `} />
                            )
                        }
                    </div>

                </div>

                {
                    isOpen && item.children && item.children.length > 0 && (

                        <div>
                            {
                                item.children && item.children.length > 0 && (

                                    <div>
                                        {
                                            item.children.map((child, index) => (

                                                <div key={child.title} className='pl-5 h-12.25 border-dashed border-b-[0.5px] border-lfirst-4 w-full flex items-center'>
                                                    <p className='text-[14px]'>• {child.title}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                }

            </div>

        </div>
    )
}



export default Header
