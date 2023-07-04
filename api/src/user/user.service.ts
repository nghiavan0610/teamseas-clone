import { Injectable } from '@nestjs/common';
import { DonateInput } from './dto/donate.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderByInput } from './dto/order-by.input';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async donate(donateInput: DonateInput) {
        return await this.prisma.user.create({
            data: donateInput,
        });
    }

    async findAll(orderBy?: OrderByInput) {
        const { field = 'createdAt', direction = 'desc' } = orderBy || {};

        return await this.prisma.user.findMany({
            orderBy: { [field]: direction },
        });
    }

    findOne(id: string) {
        return this.prisma.user.findUnique({
            where: { id },
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
