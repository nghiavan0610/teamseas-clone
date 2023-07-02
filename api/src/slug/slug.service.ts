import { Injectable } from '@nestjs/common';
import slugify from 'slugify';

@Injectable()
export class SlugService {
    generateSlug(name: string): string {
        return slugify(name, {
            replacement: '-',
            lower: true,
            remove: /[*+~.()'"!:@]/g,
        });
    }
}
