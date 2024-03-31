'use client';

import { useCallback, useEffect, useRef, useState} from "react";
import find from "../lib/find";


export default function Hustle({id}) {
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
        <>
        <h1>HUSTLE</h1>
        <p>Going to show your progress</p>
        </>
    );
}