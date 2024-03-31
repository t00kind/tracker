'use client';
import { useEffect } from "react";
import { useTelegram } from "../useTg"
import { useRouter } from "next/navigation";

export default function Settings() {
    const {user, webApp} = useTelegram()

    const router = useRouter();

    const bbback = () => {
        router.push('/')
    }
    

    useEffect(() => {
        webApp.BackButton.show();
        webApp.BackButton.onClick(bbback)
    }, [webApp]);
    return (
        <>{user?.first_name} can Change</>
    )


}