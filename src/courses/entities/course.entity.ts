import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Course {

    @Prop()
    title: string

    @Prop()
    description: string

    @Prop()
    weeks:number

    @Prop()
    tuition:number

    @Prop({
        type: "string",
        enum: [
            "Beginer", 
            "Intermediate",
            "Advanced"
        ],
    })
    minimmumSkill: string

    @Prop({
        type:"date",
        name:"created_at",
        default:()=>"CURRENT_TIMESTAMP"
    })
    createdAt:Date
}


export const CourseSchema = SchemaFactory.createForClass(Course)


