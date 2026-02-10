import Image from "next/image";
import Link from "next/link";



import Why from "./components/Home/Why";
import KeyFeatures from "./components/Home/KeyFeatures";


export default function Home() {
  return (

    <div className="w-full">

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
          <p className="text-[12px] italic mt-1">(Teknologi Otomasi Tata Organisasi Lokal)</p>
          <p className="mt-5.25 f_almarai">
            "Transform rigid regulations and complex SOPs into friendly, natural conversations. TotO-L is your 24/7 virtual assistant, engineered to understand regulatory contexts with precision—even responding in local dialects."
          </p>

          <div className="mt-7.5 flex gap-5 justify-center md:justify-start">

            <Link href="/demo" className="flex justify-center items-center bg-ltwo-2 h-11.25 rounded-[25px] w-40 text-white border-white border-4 hover:bg-lfirst-7   hover:border-ltwo-2 hover:text-ltwo-2 cursor-pointer">
              Demo
            </Link>
            <Link href="/demo" className="flex justify-center items-center bg-lfirst-7 border-4 border-ltwo-2 text-ltwo-2 h-11.25 rounded-[25px] w-40 hover:bg-ltwo-2 hover:text-white hover:border-white cursor-pointer">
              Get Started
            </Link>


          </div>
        </div>
      </div>

      <div className="px-3 md:px-5 lg:px-9 xl:px-37.5">

        <Why />

        <KeyFeatures />

      </div>





    </div>
  );
}



