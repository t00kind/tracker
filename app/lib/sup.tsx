'use server';

export default async function sup(n, prisma) {
    await prisma.habs.create({
        data: {
            title: n,
        }
    })
    
}