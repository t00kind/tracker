'use server';
import prisma from './prisma'

const Chng = async(u) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: u.id,
            },
        });

        if (!user) {
            await prisma.user.create({
                data: {
                    id: u.id,
                    username: u.username,
                },
            });
        } 
    } catch (error) {
        console.error('Ошибка при поиске/создании записи:', error);
    }
};

export default Chng;