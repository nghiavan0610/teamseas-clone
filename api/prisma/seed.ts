import { seedUsers } from './seeders/user.seed';
import { seedTeams } from './seeders/team.seed';

(async function seed() {
    try {
        await seedTeams();
        await seedUsers();

        console.log('[ADDED] All seed data has been added to database');
    } catch (err) {
        console.error(err);
    }
})();
