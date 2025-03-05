import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { errorHandler, notFoundHandler } from './middleware/error.js';
import indexRouter from './routes/index.js';
import whitelistRouter from './routes/whitelist.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.set('port', process.env.PORT || 3200);
app.use(bodyParser.json());

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
app.use(express.static(path.join(__dirname, '../web')));

// Routes
app.use('/', indexRouter);
app.use('/whitelist', whitelistRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app; 