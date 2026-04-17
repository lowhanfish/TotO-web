'use client'

import React from 'react'

import Footer from './Footer'
import { usePathname } from 'next/navigation'

const FooterWraper = () => {
    const pathname = usePathname()
    const disabledPaths = ["/demo"];

    if (disabledPaths.includes(pathname)) {
        return null;
    }


    return (
        <div>
            <Footer />
        </div>
    )
}

export default FooterWraper
