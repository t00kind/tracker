'use server';
import prisma from './prisma'
import { GetServerSideProps } from 'next';

async function Auth(u) {
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
                    username: u.username
                },
            });
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

export default Auth;