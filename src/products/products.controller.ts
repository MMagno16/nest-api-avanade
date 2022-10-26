import {
    Controller,
    Get,
    Post,
    Patch,
    Body,
    Param,
  } from '@nestjs/common';
import { CreateProductDto } from './dto/createProducts.dto';    
import { UpdateProductDTO } from './dto/updateProducts';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
    //injeção de dependencia
    constructor(private readonly productsService: ProductsService) {}
    // criar
    @Post()
    async createUser(@Body() req: CreateProductDto): Promise<string> {
        return this.productsService.createProduct(req);
      }
    //listar todos localhost:3000/products
    @Get()
    async findAll() {
        return this.productsService.findAll();
    }
    //atualizar localhost:3000/products/1  
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }
     //listar um    localhost:3000/products/1
     @Patch(':id')
     async update(@Param('id') id: string, @Body() req: UpdateProductDTO) { 
         return this.productsService.update(id, req);
     }

}


//rota para cadastro de produtos
// name, price, description, categoryId,
//criar dto para cadastrar produtos


