import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedUsers = async () => {
    try {
        const userData = [];

        for (let i = 0; i < 50; i++) {
            userData.push({
                username: i === 0 ? 'admin' : `user${i + 1}`,
                email: i === 0 ? 'admin@gmail.com' : `user${i + 1}@gmail.com`,
                donate: Math.floor(Math.random() * (10000 - 1 + 1) + 1),
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }

        await prisma.user.deleteMany();
        await prisma.user.createMany({ data: userData });

        console.log(`Users data has been added to database`);
    } catch (err) {
        throw err;
    } finally {
        await prisma.$disconnect();
    }
};

export { seedUsers };
