import { useRouter } from "next/navigation";

const back = () => {
    const router = useRouter();
    router.push('/')

};

export default back;