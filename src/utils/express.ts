import logger from './logging.js';

export function onExpressError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') throw error;

    const port = process.env.PORT || 3200;
    const messages: Record<string, string> = {
        EADDRINUSE: `Port ${port} is already in use.`,
        EACCES: `Port ${port} requires elevated privileges.`,
        ERR_HTTP2_HEADERS_SENT: 'An endpoint attempted to send multiple HTTP/2 headers.',
    };

    if (messages[error.code as keyof typeof messages]) {
        logger.error(messages[error.code as keyof typeof messages]);
        process.exit(1);
    }
}

export function onExpressListen(port: number): void {
    logger.info(`Server running at http://localhost:${port}`);
}
