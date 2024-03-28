'use client';

import { useEffect, useState } from 'react';
import Logo from '../ui/Logo';
import { useTelegram } from '../useTg';
import { useRouter } from 'next/router';
import prisma from '../lib/prisma';
import sup from '../lib/sup'


export default function Add() {
    const {user,webApp} = useTelegram();

    const [name, setN] = useState('');
    const [tp, setT] = useState('');


    const bbback = () => {
        const router = useRouter();
        router.push('/')

    };

    const sb = async() => {
        await sup(name, prisma);

    }

    useEffect(() => {
        webApp.MainButton.isVisible = true;
        webApp.MainButton.setText("Создать");
        webApp.MainButton.onClick(sb);
        webApp.BackButton.show();
        webApp.BackButton.onClick(bbback);
    }, [webApp]);


    return (
        <div className='face2'>
            <Logo />
            <h1>Введите название</h1> 
            <input onChange={e => setN(e.target.value)} className="writer" type="text" />
            <h2>Выберите тип</h2> 
            <select onChange={e => setT(e.target.value)} className="writer" name="typis">
                <option value="count">Кол-во повторений</option>
                <option value="time">Продолжительность подхода</option>
                <option value="tracker">Сколько прошло с данного события</option>
                <option value="bububu">Сделал/Не сделал</option>
            </select>
        </div>
    );

}