    'use client'
    import React from 'react'
    import Image from "next/image";
    import yo from "../../assets/perfilrecortada.png"
    import Link from "next/link";

    const about = () => {

        return(
            <div className='flex flex-row h-96   w-full items-center justify-around my-20'>
                <div className="flex flex-col h-64 w-1/3  items-end justify-center   ">
                    <Image src={yo} alt={"Foto de perfil"}  height={350} />
                </div>
                <div className="flex flex-col h-full w-1 bg-gray-300"/>
                <div className="flex flex-col h-84 bg-neutral-900  w-2/4 rounded-lg p-10 " style={{filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 1))"}}>
                    <h2 className="text-4xl font-bold  " style={{color:"#05EBF5"}}>Developer & Designer UI/UX</h2>
                    <h3 className="text-2xl font-semibold">Eddy A. Silva Matute</h3>
                    <h3 className="text-xl mt-12">- 4 Años de Experiencia</h3>
                    <h3 className="text-xl ">- Diseño Web/Mobile</h3>
                    <h3 className="text-xl ">- Desarrollo Web, Mobile, Desktop</h3>
                    <div className="flex flex-row w-full items-center justify-center ">
                       <Link href={"https://api.whatsapp.com/send/?phone=%2B50583215653&text&type=phone_number&app_absent=0"}> <button

                            className="w-32 h-10 rounded-lg mt-3 "
                            style={{backgroundColor:"rgba(5,235,245,0.5)"}}
                            onMouseOut={(event) => {
                                event.target.style.filter = "none", event.target.style.scale = 1
                            }}
                            onMouseOver={(event) => {
                                event.target.style.filter = "drop-shadow(0 0 10px rgba(122, 233, 235, 1))", event.target.style.scale = 1.05
                            }}
                        >Hire Me!</button>
                       </Link>
                    </div>
                </div>


            </div>
        )
    }

    export default about
