'use client'

import styles from "./page.module.css";
import Logo from "./ui/Logo";
import {useTelegram} from "./useTg";
import {useEffect} from "react";
import { useAuthContext } from "./components/AuthProvider";

export default function Home() {
  const {webApp} = useTelegram();
  const { user, loading, isAuthenticated, error } = useAuthContext();

  useEffect(()=> {
    if (webApp) {
      webApp.MainButton.hide();
      webApp.BackButton.hide();
      webApp.SettingsButton.show();
    }
  }, [webApp])

  return (
    <main className={styles.main}>
      <Logo />
      
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        {loading && <p>Загрузка...</p>}
        
        {error && (
          <div style={{ color: 'red' }}>
            <p>Ошибка: {error}</p>
          </div>
        )}
        
        {isAuthenticated && user && (
          <div>
            <h2>Добро пожаловать, {user.firstName || user.username}!</h2>
            <p>Telegram ID: {user.telegramId}</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              Аутентификация успешна!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}