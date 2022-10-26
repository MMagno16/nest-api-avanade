import { IsNotEmpty, IsString, IsNumberString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
     name?: string;

     @IsString()
     price?: string;

     @IsNumberString()
     categoryId?: number;

     @IsNumberString()
     description?: string;
}
// categoryId,
