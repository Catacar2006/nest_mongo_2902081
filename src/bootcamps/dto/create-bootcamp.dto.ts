import { IsNotEmpty, IsAlpha, IsInt, Min, Max, IsPositive} from 'class-validator';

export class CreateBootcampDto {

    @IsNotEmpty()
    @IsAlpha()
    readonly name:String;

    @IsNotEmpty()
    @IsPositive()
    readonly phone:number;

    @IsNotEmpty()
    @IsAlpha()
    readonly address:String;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(10)
    readonly averageRating:number;
    readonly createdAt:Date;
    
}
 