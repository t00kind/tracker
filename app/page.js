'use client'

import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./ui/Logo";
import Da from './ui/Da'
import { useTelegram } from "./use-telegram";



export default function Home() {
  const telegram = useTelegram()
  return (
    <main className={styles.main}>
      <Logo />
        <Da />
      <h2>I'm just better {String(telegram?.telegram?.WebApp?.initDataUnsafe)}</h2>
      <hr />
      <h1>HUSTLE</h1>
        <button className='btn'>Switch with R</button>
      <Link href="/about">About project</Link>
    </main>
  );
}