import express from 'express';
import app from './app.js';
import sequelize from './source/config/db.js';
import dotenv from 'dotenv';

dotenv.config();

sequelize
  .sync()
  .then(() => {
    console.log('Database & tables synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
app(express);
