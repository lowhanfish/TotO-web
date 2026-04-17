import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './assets/styles/index.css';
import './assets/styles/fonts.css';
import './assets/styles/button.css';
import Providers from "./components/Providers";
import FooterWraper from "./components/Footer/FooterWraper";




// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "TotO-L - Konawe Selatan",
  description: "Asisten AI Resmi Pemerintah Kabupaten Konawe Selatan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" f_almarai w-full  bg-amber-200 text-lfirst-5 "
      >

        <Providers>
          <div className="flex flex-col relative overflow-scroll">
            <div className="h-auto w-full">
              <Header />
              <div className="h-full w-full">
                {children}
              </div>
            </div>
            <FooterWraper />

          </div>
        </Providers>

      </body>
    </html>
  );
}
