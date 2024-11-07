import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Review {
    
    @Prop()
    title: string 
    
    @Prop()
    comment: string

    @Prop()
    rating: number

}

export const ReviewSchema = SchemaFactory.createForClass(Review)

