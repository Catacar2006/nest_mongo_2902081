import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Bootcamp {
    
    @Prop()
    name:String;

    @Prop()
    phone:number;

    @Prop()
    address:String;

    @Prop()
    averageRating:number;

    @Prop()
    createdAt:Date;

}

export const BootcampsSchema = SchemaFactory.createForClass(Bootcamp);
