'use client';

import { useCallback, useEffect, useState, useRef, use } from 'react';
import Logo from '../ui/Logo';
import { useTelegram } from '../useTg';
import push from '../lib/push';
import { useRouter } from 'next/navigation';


export default function Add() {
    const {user,webApp} = useTelegram();

    const [name, setN] = useState('');
    const [tp, setT] = useState('bububu');
    const [f, setF] = useState({title: '', format: "", userId: 0});
    const stateR = useRef({});
    stateR.current = f;

    const router = useRouter();

    const bbback = () => {
        router.push('/')
    }
    

    const mangekyo = () => {
        webApp.showPopup({
            title: "Success! 🦾",
            message: "Успешна создана.",
            buttons: [{"type": "ok"}]
        })
    }
    const sub = useCallback(async() => {
        const r = await push(stateR.current);
        if (r) {
            mangekyo();
            router.push('/');
            
            
        }
    }, [stateR])

    useEffect(()=>{
        setF({
            title: name,
            format: tp,
            userId: user.id

        })
    }, [name, tp])


    useEffect(() => {
        webApp.MainButton.show();
        webApp.MainButton.setText("Создать");
        webApp.MainButton.onClick(sub);
        webApp.BackButton.show();
        webApp.BackButton.onClick(bbback)
        webApp.SettingsButton.show();
    }, [webApp]);


    return (
        <div className='face2'>
            <Logo />
            <h1>Введите название</h1> 
            <input onChange={e => setN(e.target.value)} className="writer" type="text" />
            <h2>Выберите тип</h2> 
            <select onChange={e => setT(e.target.value)} name="typis">
                <label>Выберите тип</label>
                <option value="count">Кол-во повторений</option>
                <option value="time">Продолжительность действия</option>
                <option value="tracka">Сколько прошло с данного события</option>
                <option selected={true} value="bububu">Сделал/Не сделал</option>
            </select>
        </div>
    );

}