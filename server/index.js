import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);
//components
mongoose.connect('mongodb+srv://pritamskul:5DQmVvFLj0XGIsMf@blog.f2uecmd.mongodb.net/?retryWrites=true&w=majority&appName=blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('MongoDB connection error:', error);
      });
import Router from './routes/route.js';


const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));