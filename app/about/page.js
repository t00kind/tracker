'use client';

import styles from "../page.module.css";
import Logo from "../ui/Logo"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTelegram } from "../useTg";
export default function About() {
  const {user, webApp} = useTelegram();
  const router = useRouter();

  const bbback = () => {
      router.push('/')
  
  }
  
  useEffect(() => {
      webApp.BackButton.show();
      webApp.BackButton.onClick(bbback)
      webApp.SettingsButton.show();
  }, [webApp]);

    return (
      <main className={styles.main}>
        <Logo />
        <h2 className={styles.cool}>The progressive web app<br />to track your things.</h2>
        <code>By mzfkn TNBL</code>
      </main>
    );
  }