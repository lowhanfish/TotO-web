import Image from 'next/image'
import React from 'react'


const KeyFeatures = () => {
    return (
        <div className="mt-10 px-8">

            <div className="text-center mb-5">
                <p>
                    <span className="text-[36px] ">Key</span>
                    <span className="text-[42px] font-bold text-ltwo-6"> Features</span>
                </p>
            </div>


            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1 p-10 bg-ltwo-2/20 text-center border-8 border-lfirst-3 rounded-[24]">
                    <Image src="/images/key1.png" alt="" width={1920} height={600} className="w-full h-auto object-cover" />
                    <p className="text-[20px] font-semibold opacity-70 leading-5 text-ltwo-7 pt-5">Smart Document Ingestion (RAG Technology)</p>
                    <p className="font-light text-[16px] leading-5 pt-5">Simply upload PDF files, DOCX documents, or other technical manuals. TotO-L will “learn” the content within seconds—without the need for model retraining</p>
                </div>
                <div className="flex-1 p-10 bg-[#87A1A0]/75 text-center border-8 border-lfirst-5 rounded-[24]">
                    <Image src="/images/key2.png" alt="" width={1920} height={600} className="w-full h-auto object-cover" />
                    <p className="text-[20px] font-semibold opacity-70 leading-5 text-lfirst-2 pt-5">Hyper-Local Communication</p>
                    <p className="font-light text-[16px] leading-5 pt-5">More than just a regular chatbot. TotO-L can interact using local languages, ensuring public services feel more personal, inclusive, and accessible to the community.</p>
                </div>
                <div className="flex-1 p-10 bg-ltwo-2/20 text-center border-8 border-lfirst-3 rounded-[24]">
                    <Image src="/images/key3.png" alt="" width={1920} height={600} className="w-full h-auto object-cover" />
                    <p className="text-[20px] font-semibold opacity-70 leading-5 text-ltwo-7 pt-5">Private & Secure Environment</p>
                    <p className="font-light text-[16px] leading-5 pt-5">Data security is our top priority. Our system can run on your internal (on-premise) servers, ensuring that sensitive government or corporate documents never leave your secure environment</p>
                </div>



            </div>



        </div>
    )
}

export default KeyFeatures
