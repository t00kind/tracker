'use client'

import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./ui/Logo";
import Da from './ui/Da';
import Hustler from "./ui/User";
import {TelegramProvider, useTelegram} from "./useTg";
import {useEffect, useState} from "react";

export default function Home() {
  const {user,webApp} = useTelegram();
  const [unq, setU] = useState(false);

  const usr = user;

  useEffect(() => {
      setU(usr?.id);
  }, [usr]);
  const chng = () => {
      console.log(unq);
  }
  return (
          <main onLoad={chng} className={styles.main}>
            <Logo />
              <Da />
              <Hustler />
            <h1>Cause He Do Art:</h1>
              <h1>UUU: {unq}</h1>
              <button className='btn'>Switch with R</button>
            <Link href="/about">About project</Link>
          </main>
  );
}