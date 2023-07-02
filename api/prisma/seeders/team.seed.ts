import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedTeams = async () => {
    try {
        const teamData = [];
        for (let i = 0; i < 10; i++) {
            teamData.push({
                name: `Team ${i + 1}`,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }

        await prisma.team.deleteMany();
        await prisma.team.createMany({ data: teamData });
        console.log(`Team data has been added to database`);
    } catch (err) {
        throw err;
    } finally {
        await prisma.$disconnect();
    }
};

export { seedTeams };
