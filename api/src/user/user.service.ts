import { TeamService } from './../team/team.service';
import { Injectable } from '@nestjs/common';
import { DonateInput } from './dto/donate.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderByInput } from './dto/order-by.input';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService, private teamService: TeamService) {}

    async donate(donateInput: DonateInput) {
        const { teamName, teamId, ...data } = donateInput;

        if (teamId) {
            await this.teamService.update({ id: teamId, total: data.donate });

            const user = await this.prisma.user.create({
                data: {
                    ...data,
                    team: { connect: { id: teamId } },
                },
                include: { team: true },
            });
            return user;
        }

        if (teamName) {
            const team = await this.teamService.create({ name: teamName, total: data.donate });

            return await this.prisma.user.create({
                data: {
                    ...data,
                    team: { connect: { id: team.id } },
                },
                include: { team: true },
            });
        }

        return await this.prisma.user.create({
            data: donateInput,
        });
    }

    async findAll(orderBy?: OrderByInput) {
        const { field = 'createdAt', direction = 'desc' } = orderBy || {};

        return await this.prisma.user.findMany({
            orderBy: { [field]: direction },
            include: { team: true },
        });
    }

    findOne(id: string) {
        return this.prisma.user.findUnique({
            where: { id },
            include: { team: true },
        });
    }

    async getTotalDonation() {
        const res = await this.prisma.user.aggregate({
            _sum: {
                donate: true,
            },
        });

        return res._sum.donate;
    }
}
