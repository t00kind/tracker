'use client'

import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./ui/Logo";
import Da from './ui/Da';
import Hustler from "./ui/User";
import {TelegramProvider, useTelegram} from "./useTg";
import {useEffect, useState} from "react";
import Digga from './lb.tsx'

export default function Home() {
  const {user,webApp} = useTelegram();
  const [unq, setU] = useState(false);

  const usr = user;

  useEffect(() => {
      setU(usr?.id);
  }, [usr]);
  return (
          <main className={styles.main}>
            <Logo />
              <Da />
              <Hustler />
            <h1>Cause He Do Art:</h1>
              <Digga id={unq} />
              <button className='btn'>Switch with R</button>
            <Link href="/about">About project</Link>
          </main>
  );
}