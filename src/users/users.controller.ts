import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    //injeção de dependencia
  constructor(private readonly usersService: UsersService) {}
  //criar
  @Post()
  //toda vez que criar async, pprometo retornar uma string.
  async createUser(@Body() req: CreateUserDto): Promise<string> {
    return this.usersService.createUser(req);
  }
  //listar todos localhost:3000/users
    @Get()
    async findAll() {
        return this.usersService.findAll();
    }
  //listar um    localhost:3000/users/1
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }
  //atualizar localhost:3000/users/1
    @Patch(':id')
    async update(@Param('id') id: string, @Body() req: UpdateUserDTO) { 
        return this.usersService.update(id, req);
    }
  //deletar
}
