'use client'

import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./ui/Logo";
import Da from './ui/Da';
import Hustler from "./ui/Name";
import {useTelegram} from "./useTg";
import {useCallback, useEffect, useState, useRef} from "react";
import User from "./ui/User";
import Hab from './ui/Art';
import Auth from './lib/auth';
import find from './lib/find'


export default function Home() {
  const {user,webApp} = useTelegram();
  const [habs, setH] = useState(false);
  const u = useRef();
  u.current = user;



  const usr = user;
  useEffect(() => {
    if (usr) {
      Auth(usr);
      HHH();
    };
  }, [usr]);

  return (
          <main className={styles.main}>
            <Logo />
            {Boolean(!usr) && <p>Ain't work on desktop</p>}
              <Da />
              <Hustler />
            <h1>Cause He Do Art: </h1>
            <Link href="/add"><button className="btn">Создать</button></Link>
            <Link href="/about">About project</Link>
          </main>
  );
}