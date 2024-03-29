require('dotenv').config();

const environment = process.env.NODE_ENV || 'test';

const suffix = {
  dev: '-dev',
  development: '-dev',
  test: '-test',
};

const options = {
  host: process.env.MYSQL_HOST || 'localhost',
  // port: process.env.MYSQL_PORT || '3306',
  database: 
    `${process.env.MYSQL_DB_NAME || 'blogs-api'}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
