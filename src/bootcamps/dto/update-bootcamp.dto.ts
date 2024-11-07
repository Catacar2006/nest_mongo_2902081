import { PartialType } from '@nestjs/mapped-types';
import { CreateBootcampDto } from './create-bootcamp.dto';

export class UpdateBootcampDto extends PartialType(CreateBootcampDto) {

    readonly name?:String;
    readonly phone?:number;
    readonly address?:String;
    readonly averageRating?:number;
    readonly createdAt?:Date;
}
