import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsTiktok, BsTelegram, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='w-full bg-lfirst-1 flex flex-col lg:flex-row py-10 px-2 md:px-45 gap-1 md:gap-50'>
            <div className='flex-1 flex flex-col'>
                <div className='flex gap-2 flex-row items-center justify-center md:justify-start'>
                    <Image
                        src='/images/icon_small.png'
                        alt='Logo'
                        width={36}
                        height={36}
                        className='object-contain'
                    />
                    <p className='text-lfirst-7 text-[30px]'>
                        <span className='text-ltwo-5'>TotO</span>
                        <span className='font-semibold'>-L</span>
                    </p>
                </div>

                <div className='flex flex-col pb-10 items-center md:items-start text-center md:text-left'>
                    <div className='text-lfirst-6 pt-5 text-[12px] '>
                        <div className='font-bold text-[14px]'>AI-powered omnichannel platform </div>
                        <p className='pt-2'>
                            for automating services, accessing knowledge, and delivering intelligent communication across channels
                        </p>
                    </div>

                    <div className='flex flex-row gap-3 pt-5'>
                        <Link href="/">
                            <BsFacebook className='text-[20px]' />
                        </Link>
                        <Link href="/">
                            <BsTiktok className='text-[20px]' />
                        </Link>
                        <Link href="/">
                            <BsInstagram className='text-[20px]' />
                        </Link>
                        <Link href="/">
                            <BsTelegram className='text-[20px]' />
                        </Link>
                        <Link href="/">
                            <BsLinkedin className='text-[20px]' />
                        </Link>
                    </div>

                </div>
            </div>
            <div className='flex-2'>
                <div className='flex flex-col md:flex-row gap-2 text-center md:text-left'>
                    <div className='flex-1 pb-5'>
                        <p className='text-[16px] font-bold text-ltwo-5'>SOLUTIONS</p>
                        <div className='text-[12px] pt-2 flex flex-col gap-1'>
                            <Link href="/"><p>Government</p></Link>
                            <Link href="/"><p>Business</p></Link>
                            <Link href="/"><p>Customer Support</p></Link>
                            <Link href="/"><p>Internal Operations</p></Link>
                        </div>
                    </div>
                    <div className='flex-1 pb-5'>
                        <p className='text-[16px] font-bold text-ltwo-5'>PLATFORM</p>
                        <div className='text-[12px] pt-2 flex flex-col gap-1'>
                            <Link href="/"><p>AI Assistant</p></Link>
                            <Link href="/"><p>WhatsApp Automation</p></Link>
                            <Link href="/"><p>Web Chat Widget</p></Link>
                            <Link href="/"><p>API Access</p></Link>
                            <Link href="/"><p>Knowledge Engine</p></Link>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <p className='text-[16px] font-bold text-ltwo-5'>RESOURCES</p>
                        <div className='text-[12px] pt-2 flex flex-col gap-1'>
                            <Link href="/"><p>Documentation</p></Link>
                            <Link href="/"><p>API Reference</p></Link>
                            <Link href="/"><p>Blog</p></Link>
                            <Link href="/"><p>Help Center</p></Link>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <p className='text-[16px] font-bold text-ltwo-5'>LEGAL</p>
                        <div className='text-[12px] pt-2 flex flex-col gap-1'>
                            <Link href="/"><p>Privacy Policy</p></Link>
                            <Link href="/"><p>Terms of Service</p></Link>
                            <Link href="/"><p>AI Usage Policy</p></Link>
                            <Link href="/"><p>Data Security</p></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
