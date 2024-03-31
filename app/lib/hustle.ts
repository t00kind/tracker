'use server';
import prisma from "./prisma";

const true_hustle = async(u) => {
    const r =  await prisma.user.findUnique({
        where: {id: u}
    })
    return r;

}

export default true_hustle;

