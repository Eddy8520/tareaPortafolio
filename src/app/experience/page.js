'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import alunar from "../../assets/alunar.png"
import topmeals from "../../assets/topmeals.png"
import planetrip from "../../assets/planetrip.png"
import yo from "../../assets/perfilrecortada.png"

const experience = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tiempo, setTiempo] = useState(0)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const interval = setInterval(() => {
            setTiempo(prevTiempo => prevTiempo + 1);
        }, 200  );

        return () => clearInterval(interval);
    }, []);

    return(
        <div className="flex flex-col w-full min-h-screen items-center p-5">
            <h2 className="text-6xl font-semibold text-center" style={{
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))",
                color: "#fff"
            }}>WORK EXPERIENCE</h2>
            {tiempo > 0 ?<div className="flex flex-row h-64 w-3/4 my-10   justify-between ease-in duration-100 ">
                <div className='w-2/4 text-right p-10'>
                    <h2 className="text-4xl font-bold text-gray-300">Optima Consultores</h2>
                    <h3 className="text-2xl">2021-2022</h3>
                    <p className="text-lg ">
                        Trabaje como desarrollador y Diseñador<br/> web con la herramienta WordPress
                    </p>
                </div>
                <div className='flex items-center p-10 border-l border-b-cyan-50 '>
                    <Image src={topmeals} alt={"sintonia Diosa"} width={500} height={400}/>
                </div>
            </div>:<div/>
            }
            {/*////////*/}
            {tiempo > 1 ? <div className="flex flex-row h-64 w-3/4 my-10   justify-between ease-in duration-100 ">
                <div className='w-2/4 text-right p-10'>
                    <h2 className="text-4xl font-bold text-gray-300">PlaneTrip.co</h2>
                    <h3 className="text-2xl">2022-2023</h3>
                    <p className="text-lg ">
                        Trabaje este Proyecto de Inicio a FIn Como<br/>Fullstack Developer con herramientas <br/> como
                        Figma, Next.js, React.js Zustand
                    </p>
                </div>
                <div className='flex items-center p-10 border-l border-b-cyan-50 '>
                    <Image src={planetrip} alt={"sintonia Diosa"} width={500} height={400}/>
                </div>
            </div>:<div/>
            }
            {/*////////*/}
            {tiempo > 3 ? <div
                className="flex flex-row h-64 w-3/4 my-10   justify-between ease-in duration-100 ">
                <div className='w-2/4 text-right p-10'>
                    <h2 className="text-4xl font-bold text-gray-300">Sintonia Diosa / Alunar</h2>
                    <h3 className="text-2xl">2024</h3>
                    <p className="text-lg ">
                        Desarrollo web y Movil, participando Como<br/>Frontend Developer con herramientas <br/> React.js, React-Native, Zustand
                    </p>
                </div>
                <div className='flex items-center p-10 border-l border-b-cyan-50 ease-in '>
                    <Image src={alunar} alt={"sintonia Diosa"} width={500} height={400}/>
                </div>
            </div> : <div/>}
            {tiempo > 4 ? <div
                className="flex flex-row h-64 w-3/4 my-10 justify-between ease-in duration-100 ">
                <div className='w-2/4 text-right p-10'>
                    <h2 className="text-4xl font-bold text-gray-300">Pizza Hut / Fridays</h2>
                    <h3 className="text-2xl">2024</h3>
                    <p className="text-lg ">
                        Desarrollador Frontend<br/> ejecucion de un Proyecto ERP <br/> React.js, React-Native, React-Native for Windows, Zustand, Express.js, Next.js
                    </p>
                </div>
                <div className='flex items-center mr-60  p-10  border-l border-b-cyan-50 ease-in '>
                    <Image src={yo} alt={"sintonia Diosa"} height={250}/>
                </div>
            </div> : <div/>}
        </div>
    )
}

export default experience;
