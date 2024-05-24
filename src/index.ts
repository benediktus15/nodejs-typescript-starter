import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { config } from './config';

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());

app.get('/', (req, res) => {
  res.send('TypeScript + Node.js + Express!');
});

app.listen(config.APP_PORT, () => {
  console.info(`Server is running on http://localhost:${config.APP_PORT}`);
});
