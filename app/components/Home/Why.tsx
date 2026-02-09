import React from 'react'

const Why = () => {
    return (
        <>
            <div className="text-center">
                <p>
                    <span className="text-[36px] ">Why</span>
                    <span className="text-[42px] font-bold text-ltwo-6">TotO-</span>
                    <span className="text-[36px] ">L</span>
                    <span className="text-[42px] text-ltwo-6">?</span>
                </p>

            </div>

            <div className="flex items-center justify-center gap-5 md:gap-15 flex-col md:flex-row w-full h_almarai mt-5">
                <div className="px-5 md:w-127.5 bg-lfirst-7/15 rounded-[24] md:px-7 lg:px-15.5 py-10 pb-10 h-91.25">
                    <p className="text-lfirst-7 text-[24px] font-semibold text-center">The Problem</p>
                    <p className="text-ltwo-6 text-[16px] f_spartan font-light text-center -mt-1">(The Chaos)</p>
                    <div className="h_almarai font-light flex flex-col gap-3 leading-5 mt-5">
                        <p><span className="font-bold">Drowning in Documents :</span> <i>Regulation stacks are piling up, and finding one specific rule feels like finding a needle in a haystack.</i></p>
                        <p><span className="font-bold">Complex Jargon :</span> <i>SOPs are often too rigid and difficult for the general public or new employees to understand.</i></p>
                        <p><span className="font-bold">Burned-out Staff :</span> <i>Your team is exhausted from answering the same repetitive questions over and over again.</i></p>
                    </div>
                </div>
                <div className="px-5 w-full md:w-127.5 bg-lfirst-7/15 rounded-[24] px:5 md:px-7 lg:px-15.5 py-10 pb-10 h-91.25">
                    <p className="text-lfirst-7 text-[24px] font-semibold text-center">The TotO-L Solution </p>
                    <p className="text-ltwo-6 text-[16px] f_spartan font-light text-center -mt-1">(The Harmony)</p>
                    <div className="h_almarai font-light flex flex-col gap-3 leading-5 mt-5">
                        <p><span className="font-bold">Your Single Source of Truth :</span> <i>One portal for all information. No more searching, just asking.</i></p>
                        <p><span className="font-bold">Human-Centric Interaction :</span> <i>We turn complex legal language into friendly, easy-to-understand conversations.</i></p>
                        <p><span className="font-bold">Efficiency Without Exhaustion :</span> <i>A virtual attendant that is fast, accurate, and available 24/7 without ever catching a cold.</i></p>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Why
