import { Body, Controller, HttpException, Post, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') //rota auth http://localhost:3000/auth
export class AuthController {
  //injeção de dependência (criada primeiro no AuthController)
  constructor(private readonly authService: AuthService) {}
  @Post('login') //rota login http://localhost:3000/auth/login
  async validaLogin(@Body() req) {
    const { login, password } = req;

    if(!login) {
      // return {error: true, msg: 'Login não informado'};
        throw new HttpException('Login não encontrado',
        HttpStatus.FORBIDDEN);
    }

    console.log('login', login);
    console.log('senha', password);
    return this.authService.validaLogin(login, password); 
}
}

