import app from './app.js';
import { onExpressError, onExpressListen } from './utils/express.js';

const port = app.get('port');
const server = app.listen(port, () => onExpressListen(port));
server.on('error', onExpressError);

export default server;