import express from 'express';

import sequelize from './config/db.js';
import dotenv from 'dotenv';
import Lead from './models/Leads.js'; // Assuming you have converted the Lead model to Mongoose

// Load environment variables from .env file
// dotenv.config();

// MongoDB connection URI (assumed to be in your .env file)
// const mongoURI =
//   process.env.MONGO_URI || 'your_mongo_db_connection_string_here';

// Connect to MongoDB
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

sequelize
  .sync()
  .then(() => {
    console.log('Database & tables synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

const app = express();

app.get('/', async (req, res) => {
  res.send('welcome vercel');
});

// Define a simple route
app.get('/test', async (req, res) => {
  try {
    // const newLeadData = await Lead.create({
    //   email: 'test@gmail.com',
    //   firstName: 'sulthan',
    //   lastName: 'test',
    // });
    // console.log(newLeadData);
    const leadData = await Lead.findAll(); // Mongoose's find() method to get all leads
    res.send(leadData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
