import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function typeOrmConfig() {
  const typeOrmConfigDB: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_DB_HOST,
    port: parseInt(process.env.POSTGRES_DB_PORT, 10),
    username: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
  };
  return {
    database: typeOrmConfigDB,
    PORT: process.env.PORT,
    WEBSITE_URL: process.env.WEBSITE_URL,
  };
}
