import { HttpStatus, Injectable } from '@nestjs/common';
import { ApiResponse, User } from '@fullstack-app/datatypes';
import { DatabaseService } from '@api/database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}
  getData(): { message: User } {
    return {
      message: {
        name: 'vansi',
        email: 'dp1.1a7.si@gmail.com',
        id: 32,
      },
    };
  }

  async createNewUser(name: string, email: string): Promise<ApiResponse<any>> {
    const result = await this.databaseService.user.create({
      data: {
        email,
        name,
      },
    });

    return {
      data: result,
      message: 'success',
      status: HttpStatus.OK,
    };
  }
}
