import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => { //simulando a compilação do módulo
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, AuthService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

//it ou test - é o método que executa o teste