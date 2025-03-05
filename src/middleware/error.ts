import { NextFunction, Request, Response } from 'express';
import logger from '../utils/logging.js';

type RequestError = Error & { status?: number };

export function errorHandler(err: RequestError, req: Request, res: Response, next: NextFunction): void {
    logger.error(`Error: ${err.message}`);
    res.status(err.status || 500).json({ error: err.message });
}

export function notFoundHandler(req: Request, res: Response, next: NextFunction): void {
    next({ message: 'The requested resource could not be found.', status: 404 });
}