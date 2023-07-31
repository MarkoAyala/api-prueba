
import { IsString , IsNumber, IsUrl, IsNotEmpty, IsPositive} from "class-validator";
export class CatDto{
    @IsString()
    @IsNotEmpty()
    readonly name:string;

    @IsString()
    @IsNotEmpty()
    readonly race:string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    readonly age:number;

    @IsUrl()
    @IsNotEmpty()
    readonly img:string;
}