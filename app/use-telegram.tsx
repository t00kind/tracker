
'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const testMode = sharedConfig().telegram.testMode;

const TelegramContext = createContext<{ telegram: any; initData: any; originalInitData: any } | null>(null);

export function TelegramProvider({ children }: { children: ReactNode }) {
  const [telegram, setTelegram] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      const tg = (window as any)?.Telegram;
      if (tg) {
        setTelegram(tg);
        tg.WebApp.ready();
        tg.WebApp.expand();
      }
    }, 100);
  }, []);

  const originalInitData = testMode ? 'test-init-data' : telegram?.WebApp?.initData;

  const initData = telegram ? Object.fromEntries(new URLSearchParams(originalInitData)) : null;

  return (
    <TelegramContext.Provider value={{ telegram, initData, originalInitData }}>{children}</TelegramContext.Provider>
  );
}

export function useTelegram() {
  return useContext(TelegramContext);
}
