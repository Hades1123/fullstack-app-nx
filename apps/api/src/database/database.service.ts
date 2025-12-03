import { Injectable } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@fullstack-app/datatypes';

@Injectable()
export class DatabaseService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMariaDb({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT, 10),
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
    });
    super({ adapter });
  }
}
