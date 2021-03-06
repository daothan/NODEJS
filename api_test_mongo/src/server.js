import 'commander';
import 'babel-polyfill';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes/book';


const app = express();

const port = process.env.PORT || 3000;

if (process.env.PORT !== 'test') {
  app.use(morgan('combined'));
}

// Parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => res.json({ message: 'Welcome to Book list' }));

// Connect Database
mongoose.connect('mongodb://localhost:27017/book2', {
  useMongoClient: true,
});
mongoose.Promise = Promise;

app.use('/', router);

app.listen(port, () => {
  console.log('App is running');
});

// export all modules for testing
module.exports = app;
