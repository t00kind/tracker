'use client'

import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./ui/Logo";
import Da from './ui/Da';
import Hustler from "./ui/User";


export default function Home() {
  return (
      <main className={styles.main}>
        <Logo />
          <Da />
          <Hustler />
        <hr  className="sword"/>
        <h1>Cause He Do Art:</h1>
          <button className='btn'>Switch with R</button>
        <Link href="/about">About project</Link>
      </main>
  );
}