import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from 'src/auth/auth.service';
import { EmailService } from 'src/email/email.service';
import { PrismaService } from 'src/prisma.service';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, AuthService, EmailService, PrismaService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
