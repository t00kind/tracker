'use client'

import { TelegramProvider, useTelegram } from "../useTg";

const GetTg = () => {
  const { user, webApp } = useTelegram();
  


  return 
  (
    <TelegramProvider><h1><pre>{JSON.stringify(user, null, 2)}</pre></h1></TelegramProvider>);
};


export default GetTg;