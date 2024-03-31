'use server';
import prisma from "./prisma";

const find = async(u) => {
    const r =  await prisma.habs.findMany({
        where: {userId: u}
    })
    return r;

}

export default find;