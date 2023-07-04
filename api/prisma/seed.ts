import { seedUsers } from './seeders/user.seed';

(async function seed() {
    try {
        await seedUsers();

        console.log('[ADDED] All seed data has been added to database');
    } catch (err) {
        console.error(err);
    }
})();
