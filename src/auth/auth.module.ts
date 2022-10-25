import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  //só estou dizendo que são os controllers e services que estão no modulo a minha disposição. porém ainda não estou usando-os.
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
