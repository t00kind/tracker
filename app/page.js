'use client'

import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./ui/Logo";
import Da from './ui/Da';
import Hustler from "./ui/Khx";


export default function Home() {
  return (
      <main className={styles.main}>
        <Logo />
          <Da />
          <Hustler />
        <h2>I'm just better</h2>
        <hr  className="sword"/>
        <h1>Cause I Do Art:</h1>
          <button className='btn'>Switch with R</button>
        <Link href="/about">About project</Link>
      </main>
  );
}