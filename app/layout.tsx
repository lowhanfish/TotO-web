import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './assets/styles/index.css';
import './assets/styles/fonts.css';
import './assets/styles/button.css';
import Providers from "./components/Providers";




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
        className="flex flex-col f_almarai w-full  bg-amber-200 text-lfirst-5 "
      >

        <Providers>
          <div className="h-full w-full fixed overflow-scroll">
            <Header />
            <div className="h-full w-full">
              {children}
            </div>
          </div>
          <Footer />
        </Providers>

      </body>
    </html>
  );
}
