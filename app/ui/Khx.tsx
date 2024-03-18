'use client';

import { TelegramProvider, useTelegram } from "../useTg";

const Hustler = () => {
  const { user, webApp } = useTelegram();
  if (user) {console.log(user);}

  return (
      <>
          <b><h3 className='hustler'> Huslter {user?.first_name} </h3></b>
      </>
  );
};
export default Hustler;