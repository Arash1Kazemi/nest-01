import { Test, TestingModule } from '@nestjs/testing';
import { UsersMService } from './users-m.service';

describe('UsersMService', () => {
  let service: UsersMService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersMService],
    }).compile();

    service = module.get<UsersMService>(UsersMService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
