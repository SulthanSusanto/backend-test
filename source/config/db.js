import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import mysql2 from 'mysql2';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    dialectModule: mysql2,
    host: process.env.DB_HOST,
    logging: false, // Disable logging SQL queries to console
  },
);

export default sequelize;
