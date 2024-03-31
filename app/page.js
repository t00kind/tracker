'use client'

import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./ui/Logo";
import Da from './ui/Da';
import Hustler from "./ui/Name";
import {useTelegram} from "./useTg";
import {useCallback, useEffect, useState, useRef} from "react";
import Habs from './ui/Art';
import Auth from './lib/auth';
import { useRouter } from "next/navigation";
import Hustle from "./ui/Hustle";



export default function Home() {
  const router = useRouter();
  const {user,webApp} = useTelegram();

  const settt = () => {
    router.push("/set")

  };



  const usr = user;
  useEffect(() => {
    if (usr) {
      Auth(usr);
    };
  }, [usr]);

  useEffect(()=> {
    if (webApp) {
    webApp.MainButton.hide();
    webApp.BackButton.hide();
    webApp.SettingsButton.show();
    webApp.SettingsButton.onClick(settt);
    }

  }, [webApp])

  return (
          <main className={styles.main}>
            <Logo />
            {Boolean(!usr) && <p>Ain't work on desktop</p>}
              <Da />
              <Hustler />
              <br />
            <h1>Cause He Do Art: </h1>
            <br />
            <Link href="/add"><button className="btn">Создать</button></Link>
            <div className="penisis"></div>
            <Habs id={user?.id}/>
            <br />
            <br />
            <Hustle />
            <br />
            <Link href="/about"><b>About project</b></Link>
          </main>
  );
}