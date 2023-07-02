import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedUsers = async () => {
    try {
        const teams = await prisma.team.findMany();

        await prisma.user.deleteMany();
        for (let i = 0; i < 50; i++) {
            const teamId = teams[(Math.random() * teams.length) | 0].id;
            const donate = Math.floor(Math.random() * (10000 - 1 + 1) + 1);

            await Promise.all([
                prisma.user.create({
                    data: {
                        username: i === 0 ? 'admin' : `user${i + 1}`,
                        email: i === 0 ? 'admin@gmail.com' : `user${i + 1}@gmail.com`,
                        donate,
                        team: { connect: { id: teamId } },
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                }),
                prisma.team.update({
                    where: { id: teamId },
                    data: { total: { increment: donate } },
                }),
            ]);
        }

        console.log(`Users data has been added to database`);
    } catch (err) {
        throw err;
    } finally {
        await prisma.$disconnect();
    }
};

export { seedUsers };
