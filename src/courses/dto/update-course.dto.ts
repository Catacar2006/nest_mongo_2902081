import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    readonly title?: string;
    readonly description?: string;
    readonly weeks?:number;
    readonly tuition?:number;
    readonly minimmumSkill?: string;
    readonly createdAt?:Date;
}
