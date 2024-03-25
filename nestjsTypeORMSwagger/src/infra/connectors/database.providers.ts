import { ConnectionOptions, createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const databaseConfig = getDataConfigDatabase();
      return await createConnection(databaseConfig);
    },
  },
];

const getDataConfigDatabase = (): ConnectionOptions => {
  return {
    type: 'mssql',
    host: process.env.DB_HOST,
    port: 1433,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    extra: {
      options: {
        encrypt: false,
      },
    },
  };
};
