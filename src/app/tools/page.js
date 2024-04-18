'use client'
import html from '../../assets/html.png'
import figma from '../../assets/figma.png'
import ilustrador from '../../assets/ilustrador.png'
import jeckpack from '../../assets/jeckpack.png'
import js from '../../assets/js.png'
import kotlin from '../../assets/kotlin.png'
import next from '../../assets/next.jpg'
import photo from '../../assets/photo.png'
import react from '../../assets/react.png'
import reactnative from '../../assets/react-native.png'
import Image from "next/image";
import styles from "./tools-styles.css"
import {useEffect, useState} from "react";

const tools = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tiempo, setTiempo] = useState(0)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const interval = setInterval(() => {
            setTiempo(prevTiempo => prevTiempo + 1);
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <h2 className="text-6xl font-semibold text-center" style={{
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))",
                color: "#fff"
            }}> WORKING TOOLS </h2>
            <div className={tiempo > 0 ? styles.fadeIn : ''}>
                {tiempo > 0 && <Image className="ease-in duration-300" src={html} alt={html} height={100} style={{
                    position: "absolute",
                    top: 200,
                    left: 300,
                    filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))"
                }}/>}
            </div>
            <div className={tiempo > 1 ? styles.fadeIn : ''}>
                {tiempo > 0 && <Image className="ease-in duration-300" src={figma} alt={html} height={100} style={{
                    position: "absolute",
                    top: 250,
                    left: 500,
                    filter: "drop-shadow(0 0 20px rgba(255, 50, 50, 1))"
                }}/>}
            </div>
            <div className={tiempo > 2 ? styles.fadeIn : ''}>
                {tiempo > 1 && <Image className="ease-in duration-300" src={ilustrador} alt={html} height={100} style={{
                    position: "absolute",
                    top: 400,
                    left: 700,
                    filter: "drop-shadow(0 0 20px rgba(255, 128, 0, 0.8))"
                }}/>}
            </div>
            <div className={tiempo > 3 ? styles.fadeIn : ''}>
                {tiempo > 1 && <Image className="ease-in duration-300" src={jeckpack} alt={html} height={100} style={{
                    position: "absolute",
                    top: 550,
                    left: 400,
                    filter: "drop-shadow(0 0 20px rgba(0, 255, 50, 1))"
                }}/>}
            </div>
            <div className={tiempo > 4 ? styles.fadeIn : ''}>
                {tiempo > 2 && <Image className="ease-in duration-300" src={js} alt={html} height={100} style={{
                    position: "absolute",
                    top: 200,
                    left: 900,
                    filter: "drop-shadow(0 0 20px rgba(255, 255, 0, 0.8))"
                }}/>}
            </div>
            <div className={tiempo > 5 ? styles.fadeIn : ''}>
                {tiempo > 2 && <Image className="ease-in duration-300" src={kotlin} alt={html} height={100} style={{
                    position: "absolute",
                    top: 550,
                    left: 1200,
                    filter: "drop-shadow(0 0 20px rgba(182, 149, 192))"
                }}/>}
            </div>
            <div className={tiempo > 6 ? styles.fadeIn : ''}>
                {tiempo > 3 && <Image className="ease-in duration-300" src={next} alt={html} height={100} style={{
                    position: "absolute",
                    top: 600,
                    left: 800,
                    filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))"
                }}/>}
            </div>
            <div className={tiempo > 7 ? styles.fadeIn : ''}>
                {tiempo > 3 && <Image className="ease-in duration-300" src={photo} alt={html} height={100} style={{
                    position: "absolute",
                    top: 200,
                    left: 1300,
                    filter: "drop-shadow(0 0 20px rgba(20, 20, 255, 0.8))"
                }}/>}
            </div>
            <div className={tiempo > 9 ? styles.fadeIn : ''}>
                {tiempo > 4 && <Image className="ease-in duration-300" src={react} alt={html} height={100} style={{
                    position: "absolute",
                    top: 400,
                    left: 150,
                    filter: "drop-shadow(0 0 20px rgba(122, 233, 235, 1))"
                }}/>}
            </div>
            <div className={tiempo > 10 ? styles.fadeIn : ''}>
                {tiempo > 1 && <Image className="ease-in duration-300" src={reactnative} alt={html} height={100} style={{
                    position: "absolute",
                    top: 400,
                    left: 1000,
                    filter: "drop-shadow(0 0 20px rgba(122, 233, 235, 1))"
                }}/>}
            </div>
        </div>
    )
}

export default tools;
