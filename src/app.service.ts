import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Bhabani';
  }
}

@Injectable()
export class NewApp {
  // Method to fetch user data
  async findAll(): Promise<{ id: number; name: string }[]> {
    return [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
  }

  // Method to fetch user info
  getUser(): string {
    return 'Fetching user data...';
  }
}
