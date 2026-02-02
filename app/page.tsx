import Image from "next/image";


export default function Home() {
  return (

    <div className="w-full ">

      <div className="flex gap-3 flex-col md:flex-row w-full h-full mt-20 md:mt-0 aspect-auto items-center">
        <div className="flex-1 w-full h-full">
          <Image src="/images/icon.png" alt="" width={600} height={500} className="object-contain z-50" />
        </div>

        <div className="flex-1 text-center -mt-12 md:mt-0 md:text-start w-full h-full flex flex-col justify-center  p-5 xl:pr-50 ">
          <p className="text-[36px] lg:text-[40px] text-ltwo-6 leading-9">
            <span className="text-white">
              TotO-L :
            </span>
            <span className="font-bold text-[30px] lg:text-[34px] pl-1">
              The Smart Digital Attendant That Speaks Your Language.
            </span>
          </p>
          <p className="mt-5.25 f_almarai">
            "Transform rigid regulations and complex SOPs into friendly, natural conversations. TotO-L is your 24/7 virtual assistant, engineered to understand regulatory contexts with precision—even responding in local dialects."
          </p>

          <div className="mt-7.5 flex gap-5 justify-center md:justify-start">

            <button className=" bg-ltwo-2 h-11.25 rounded-[25px] w-40 text-white border-white border-4 hover:bg-lfirst-7   hover:border-ltwo-2 hover:text-ltwo-2 cursor-pointer">
              Demo
            </button>
            <button className=" bg-lfirst-7 border-4 border-ltwo-2 text-ltwo-2 h-11.25 rounded-[25px] w-40 hover:bg-ltwo-2 hover:text-white hover:border-white cursor-pointer">
              Get Started
            </button>


          </div>
        </div>
      </div>

      <div className="px-3 md:px-5 lg:px-9 xl:px-37.5">

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
            <div className="flex-1 p-10 bg-[#87A1A0] text-center border-8 border-lfirst-5 rounded-[24]">
              <Image src="/images/key2.png" alt="" width={1920} height={600} className="w-full h-auto object-cover" />
              <p className="text-[20px] font-semibold opacity-70 leading-5 text-ltwo-1 pt-5">Smart Document Ingestion (RAG Technology)</p>
              <p className="font-light text-[16px] leading-5 pt-5">Simply upload PDF files, DOCX documents, or other technical manuals. TotO-L will “learn” the content within seconds—without the need for model retraining</p>
            </div>
            <div className="flex-1 p-10 bg-ltwo-2/20 text-center border-8 border-lfirst-3 rounded-[24]">
              <Image src="/images/key3.png" alt="" width={1920} height={600} className="w-full h-auto object-cover" />
              <p className="text-[20px] font-semibold opacity-70 leading-5 text-ltwo-7 pt-5">Smart Document Ingestion (RAG Technology)</p>
              <p className="font-light text-[16px] leading-5 pt-5">Simply upload PDF files, DOCX documents, or other technical manuals. TotO-L will “learn” the content within seconds—without the need for model retraining</p>
            </div>



          </div>



        </div>

      </div>





    </div>
  );
}



