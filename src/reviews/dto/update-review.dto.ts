import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {
    readonly title?: string;
    readonly comment?: string;
    readonly rating?: number;
}
