import { Test, TestingModule } from '@nestjs/testing';
import { UsersMController } from './users-m.controller';

describe('UsersMController', () => {
  let controller: UsersMController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersMController],
    }).compile();

    controller = module.get<UsersMController>(UsersMController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
