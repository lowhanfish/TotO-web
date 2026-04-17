import Image from "next/image";
import Link from "next/link";
import Why from "./components/Home/Why";
import KeyFeatures from "./components/Home/KeyFeatures";
import HeaderHome from "./components/Home/HeaderHome";


export default function Home() {
  return (

    <div className="w-full">

      <HeaderHome />

      <div className="px-3 md:px-5 lg:px-9 xl:px-37.5">

        <Why />

        <KeyFeatures />

      </div>


    </div>
  );
}



