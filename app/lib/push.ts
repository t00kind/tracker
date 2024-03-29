'use server';

import prisma from "./prisma";


export default async function push(data) {
    try {
        await prisma.habs.create({data})
        return true;} catch (error) {
            console.log(error);
        }
    
}