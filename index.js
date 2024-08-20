import express from 'express';
import app from './app.js';
import mongoose from 'mongoose';
// import sequelize from './source/config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI || 'your-mongodb-connection-string-here';
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app(express);
