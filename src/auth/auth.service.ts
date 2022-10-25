import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

async validaLogin(login: string, password: string) {
    console.log('No service - login', login);
    console.log('No service - senha', password);
    return {login, password, msg: 'Dados cadastrados com sucesso'}; //isso que devolve para o react
}
}
