'use client'

import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./ui/Logo";
import Da from './ui/Da';
import Hustler from "./ui/Name";
import {useTelegram} from "./useTg";
import {useEffect, useState} from "react";
import User from "./ui/User";
import Hab from './ui/Art';
import Auth from './lib/auth';

import prisma from "./lib/prisma";


export default function Home() {
  const {user,webApp} = useTelegram();
  const [th, setH] = useState(false);
  const [aha, setA] = useState(false);


  const usr = user;
  const yahay = () => {
    setA(true);
  }
  useEffect(() => {
    if (usr) {
      Auth(usr);
    };
  }, [usr]);

  return (
          <main className={styles.main}>
            <Logo />
            {Boolean(usr) ? (<User user={th} />): <p>Ain't work on desktop</p>}
              <Da />
              <Hustler />
            <h1>Cause He Do Art: </h1>
            {<Hab title="Привычка X" /> && aha}
            <button className="btn" onClick={yahay}>Создать</button>
            <Link href="/about">About project</Link>
          </main>
  );
}