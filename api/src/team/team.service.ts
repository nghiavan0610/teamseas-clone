import { Injectable } from '@nestjs/common';
import { CreateTeamInput } from './dto/create-team.input';
import { PrismaService } from '../prisma/prisma.service';
import { OrderByInput } from '../user/dto/order-by.input';
import { UpdateTeamInput } from './dto/update-team.input';
import { SearchTeamInput } from './dto/search-team.input';

@Injectable()
export class TeamService {
    constructor(private prisma: PrismaService) {}

    async create(createTeamInput: CreateTeamInput) {
        return await this.prisma.team.create({
            data: createTeamInput,
        });
    }

    async update(updateTeamInput: UpdateTeamInput) {
        const { id, total } = updateTeamInput;
        return await this.prisma.team.update({
            where: { id },
            data: {
                total: { increment: total },
            },
        });
    }

    async search(orderByInput?: OrderByInput, searchTeamInput?: SearchTeamInput) {
        const { field = 'total', direction = 'desc' } = orderByInput || {};

        const { query, page, limit } = searchTeamInput || {};
        const skip = (page - 1) * limit;

        const [teams, totalCount] = await Promise.all([
            this.prisma.team.findMany({
                where: query ? { name: { contains: query, mode: 'insensitive' } } : {},
                orderBy: { [field]: direction },
                include: { users: true },
                skip,
                take: limit,
            }),
            this.prisma.team.count({
                where: query ? { name: { contains: query, mode: 'insensitive' } } : {},
            }),
        ]);

        const totalPages = Math.ceil(totalCount / limit);

        return {
            teams,
            totalCount,
            totalPages,
        };
    }

    async findOne(id: string, orderByInput?: OrderByInput) {
        const { field = 'donate', direction = 'desc' } = orderByInput || {};

        return await this.prisma.team.findUnique({
            where: { id },
            include: { users: { orderBy: { [field]: direction } } },
        });
    }
}
