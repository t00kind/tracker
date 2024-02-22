import Link from "next/link";
import styles from "./page.module.css";
import Logo from "../comp/Logo";

import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
      <h2>I'm just better</h2>
      <Link href="/about">About project</Link>
    </main>
  );
}