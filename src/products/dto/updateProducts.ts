import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./createProducts.dto";

export class UpdateProductDTO extends PartialType
(CreateProductDto) {}