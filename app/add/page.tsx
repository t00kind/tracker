'use client';

import { useCallback, useEffect, useState, useRef } from 'react';
import Logo from '../ui/Logo';
import { useTelegram } from '../useTg';
import push from '../lib/push';
import back from '../lib/back';
import { useRouter } from 'next/router';


export default function Add() {
    const {user,webApp} = useTelegram();

    const [name, setN] = useState('');
    const [tp, setT] = useState('');
    const [f, setF] = useState({title: '', format: "", userId: 0});
    const stateR = useRef({});
    stateR.current = f;

    const sub = useCallback(async() => {
        const r = await push(stateR.current);
        const zzz = useRouter();
        if (r) {
            webApp.PopupParams.title = "Success!"
            zzz.push('/');
            
        }
    }, [stateR, webApp])

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
        webApp.SettingsButton.show();
        webApp.onEvent('backButtonClicked', back);
    }, [webApp, back]);


    return (
        <div className='face2'>
            <Logo />
            <h1>Введите название</h1> 
            <input onChange={e => setN(e.target.value)} className="writer" type="text" />
            <h2>Выберите тип</h2> 
            <select onChange={e => setT(e.target.value)} className="writer" name="typis">
                <label>Выберите тип </label>
                <option value="count">Кол-во повторений</option>
                <option value="time">Продолжительность подхода</option>
                <option value="tracka">Сколько прошло с данного события</option>
                <option value="bububu">Сделал/Не сделал</option>
            </select>
        </div>
    );

}