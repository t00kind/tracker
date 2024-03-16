import Link from "next/link";
import styles from "./page.module.css";
import Logo from "../comp/Logo";
import Da from '../comp/Da'
import { useTelegram } from "./use-telegram";



export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
        <Da />
      <h2>I'm just better</h2>
        <button className='btn'>Switch with R</button>
      <Link href="/about">About project</Link>
    </main>
  );
}