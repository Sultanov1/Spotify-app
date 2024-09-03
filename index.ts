import express from 'express';
import cors from 'cors';
import artistRouter from './routers/artist';
import config from './config';
import mongoose from 'mongoose';

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors(config.corsOptions));

app.use('/artist', artistRouter);

const run = async () => {
  await mongoose.connect(config.database);

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  })

  process.on('exit', () => {
    mongoose.disconnect();
  });
}

run().catch((console.error));
