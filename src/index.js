import express from 'express';
import { Database } from './config/db/database.js';
import Route from './routes/index.js';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

Database.connect();
const app = express();

app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

Route(app);

const PORT = process.env.PORT || 3000;
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
