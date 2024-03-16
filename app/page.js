import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./ui/Logo";
import Da from './ui/Da'
import { useTelegram } from "./use-telegram";



export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
        <Da />
      <h2>I'm just better</h2>
      <hr />
      <h1>HUSTLE</h1>
        <button className='btn'>Switch with R</button>
      <Link href="/tracker/about">About project</Link>
    </main>
  );
}