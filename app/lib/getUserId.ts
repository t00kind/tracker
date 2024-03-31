import { useTelegram} from "../useTg";

const getUser = () => {
    const {user, webApp} = useTelegram();
    const bay = user.id;

    return {bay}
}

export default getUser;