export class CreateCourseDto {
    readonly title: string;
    readonly description: string;
    readonly weeks:number;
    readonly tuition:number;
    readonly minimmumSkill: string;
    readonly createdAt:Date;
}
 