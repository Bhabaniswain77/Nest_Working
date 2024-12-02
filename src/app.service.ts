import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Bhabani';
  }
}

@Injectable()
export class NewApp {
  async findAll(): Promise<{ id: number; name: string }[]> {
    return [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
      { id: 6, name: 'Item 6' },
      { id: 7, name: 'Item 7' },
    ];
  }

  getUser(): string {
    return 'Fetching user data...';
  }
}
