'use client';

import { useCallback, useEffect, useRef, useState} from "react";
import find from "../lib/find";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';



const Hab = ({title, format}) => {

    const pusssh = () => {
        const truly = ["Машинa наххуй! 🚍", "Ебейший хаслер! 🦅", "Champion! 🦍", "Mzfkn Hero! 🦾"]
        const res =  Math.floor(Math.random() * 4);
        alert(truly[res]);


    }
    return (
        <div className="espada">
            <h2 className="mzfkn">{title}</h2>
            <button onClick={pusssh} className="btn">Отъебашить</button>
        </div>
    );

}


export default function Habs({id}) {
    const [habs, setH] = useState([]);

    const i = useRef(0);
    i.current = id;
    const awake = useCallback(async() => {
        const res = await find(i.current);
        setH(res);

    }, [i])

    useEffect(()=>{
        if (id) {
            awake();
        }
    }, [id])
    return(  
            <div className="exxxx">
            <Swiper pagination loop>
                {habs.length > 0 && habs.map(hab => (
                    <SwiperSlide key={hab.id} className="dwide">
                        <Hab title={hab.title} format={hab.format} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
    );
}