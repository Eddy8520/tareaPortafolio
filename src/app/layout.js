'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className} style={{margin:0,padding:0}}>
    <>
    <div className="flex flex-row h-24 bg-black
         items-center justify-between ">
      <div className="w-1/4 ">
        <h1
            className="text-2xl font-bold text-white dark:text-gray-100 text-center"
            style={{filter: "drop-shadow(0 0 20px rgba(122, 233, 235, 1))"}}
        >
          Developer & <br/> Designer UI/UX
        </h1>
      </div>
      <div className="flex flex-row justify-around w-1/3 mr-10">
        <Link href="/">
          <h2 className="text-lg font-bold text-white dark:text-gray-100"
              onMouseOut={(event) => {
                event.target.style.filter = "none", event.target.style.scale = 1
              }}
              onMouseOver={(event) => {
                event.target.style.filter = "drop-shadow(0 0 10px rgba(122, 233, 235, 1))", event.target.style.scale = 1.05
              }}
          >
            Home
          </h2>
        </Link>
        <Link href="/tools">
          <h2 className="text-lg font-bold text-white dark:text-gray-100"
              onMouseOut={(event) => {
                event.target.style.filter = "none", event.target.style.scale = 1
              }}
              onMouseOver={(event) => {
                event.target.style.filter = "drop-shadow(0 0 10px rgba(122, 233, 235, 1))", event.target.style.scale = 1.05
              }}
          >
            Tools
          </h2>
        </Link>
        <Link href="/experience">
          <h2 className="text-lg font-bold text-white dark:text-gray-100"
              onMouseOut={(event) => {
                event.target.style.filter = "none", event.target.style.scale = 1
              }}
              onMouseOver={(event) => {
                event.target.style.filter = "drop-shadow(0 0 10px rgba(122, 233, 235, 1))", event.target.style.scale = 1.05
              }}
          >
            Experience
          </h2>
        </Link>

        <Link href="/about-us">
          <h2 className="text-lg font-bold text-white dark:text-gray-100"
              onMouseOut={(event) => {
                event.target.style.filter = "none", event.target.style.scale = 1
              }}
              onMouseOver={(event) => {
                event.target.style.filter = "drop-shadow(0 0 10px rgba(122, 233, 235, 1))", event.target.style.scale = 1.05
              }}
          >
            About Me
          </h2>
        </Link>
          <Link href="/contact-us">
          <h2 className="text-lg font-bold text-white dark:text-gray-100"
              onMouseOut={(event) => {
                event.target.style.filter = "none", event.target.style.scale = 1
              }}
              onMouseOver={(event) => {
                event.target.style.filter = "drop-shadow(0 0 10px rgba(122, 233, 235, 1))", event.target.style.scale = 1.05
              }}
          >
            Contact Us
          </h2>
        </Link>
      </div>
    </div>
    {children}
      </>
    </body>
    </html>
  );
}
