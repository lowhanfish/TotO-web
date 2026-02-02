import Image from "next/image";


export default function Home() {
  return (
    <div className="flex gap-3 flex-col md:flex-row w-full h-full mt-20 md:mt-0 aspect-auto">
      <div className="flex-1 w-full h-full">
        <Image src="/images/icon.png" alt="" width={600} height={500} className="object-contain z-50" />
      </div>

      <div className="flex-1 w-full flex flex-col justify-center p-5 lg:pr-50 h-full">
        <p className="text-[40px] text-ltwo-6 leading-9">
          <span className="text-white">
            TotO-L :
          </span>
          <span className="font-bold text-[34px] pl-1">
            The Smart Digital Attendant That Speaks Your Language.
          </span>
        </p>
        <p className="mt-5.25 f_almarai">
          "Transform rigid regulations and complex SOPs into friendly, natural conversations. TotO-L is your 24/7 virtual assistant, engineered to understand regulatory contexts with precision—even responding in local dialects."
        </p>

        <div className="mt-7.5 flex gap-5">

          <button className=" bg-ltwo-3 h-11.25 rounded-[25px] w-40 text-white">
            Demo
          </button>
          <button className=" bg-ltwo-3 h-11.25 rounded-[25px] w-40 text-white">
            Get Started
          </button>


        </div>


      </div>




    </div>
  );
}



