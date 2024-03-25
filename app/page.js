'use client'

import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./ui/Logo";
import Da from './ui/Da';
import Hustler from "./ui/Name";
import {useTelegram} from "./useTg";
import {useEffect, useState} from "react";
import Chng from "./lib/auth";
import User from "./ui/User";
import Hab from './ui/Art';


export default function Home() {
  const {user,webApp} = useTelegram();
  const [th, setH] = useState(false);

  const usr = user;
  useEffect(() => {
    Chng(usr);
  }, [usr]);

  return (
          <main className={styles.main}>
            <Logo />
            <User user={th} />
              <Da />
              <Hustler />
            <h1>Cause He Do Art: </h1>
            <Hab title="Холодный душ" />
            <Link href="/about">About project</Link>
          </main>
  );
}