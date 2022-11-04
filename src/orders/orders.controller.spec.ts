import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from 'src/auth/auth.service';
import { OrdersController } from './orders.controller';

describe('OrdersController', () => {
  let controller: OrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers:[AuthService],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
