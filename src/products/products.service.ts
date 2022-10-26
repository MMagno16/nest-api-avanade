import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
async createProduct(req): Promise<string>{
    return 'Produto criado com sucesso!';
}
async findAll() {   
    return 'Todos os produtos!';
}
async findOne(id: string) {
    return `Product ${id}`;
}
async   update(id: string, req) {
    return `Product ${id} ATUALIZADO COM SUCESSO!`; 
}

}
