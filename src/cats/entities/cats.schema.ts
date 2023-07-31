import { Schema, Prop , SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Cats{
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    race:string;

    @Prop({required:true})
    age:number;

    @Prop({required:true})
    img:string;
}

export const CatsSchema = SchemaFactory.createForClass(Cats);