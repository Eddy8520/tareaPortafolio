'use client'
import Image from "next/image";
import foto from "../assets/perfilrecortada.png";
import Link from "next/link";



export default function Home() {

    return (
        <main className="flex h-full flex-col items-center justify-between ">
            <div className="flex flex-col h-screen w-full items-center justify-around bg-cover"
                 style={{backgroundImage: 'url(https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>

                <div className="flex flex-col mb-48 items-center justify-center bg-cover">
                    <div data-aos="fade-up">
                        <h1 className="text-6xl font-bold mb-6" style={{color: "#437778"}}>Welcome</h1></div>
                    <div data-aos="fade-right">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1 className="text-6xl font-bold " style={{color: "#437778"}}>I'M Devepoler & Designer
                            UI/UX</h1>
                    </div>


                </div>

            </div>
        </main>
    );
}
