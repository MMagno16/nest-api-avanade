import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from 'src/auth/auth.service';
import { EmailService } from 'src/email/email.service';
import { PrismaService } from 'src/prisma.service';
import { LogisticsController } from './logistics.controller';
import { LogisticsService } from './logistics.service';

describe('LogisticsController', () => {
  let controller: LogisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogisticsController],
      providers: [LogisticsService, AuthService, EmailService, PrismaService],
    }).compile();

    controller = module.get<LogisticsController>(LogisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
