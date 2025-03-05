import { createLogger, transports, format } from 'winston';

const logger = createLogger({
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.label({ label: '[EXPRESS]' }),
                format.colorize({ all: true }),
                format.timestamp(),
                format.printf(({ label, module, level, message, timestamp }) =>
                    `${timestamp} ${label} ${module ? `[${module}]` : ''} [${level}]: ${message}`
                )
            ),
        }),
    ],
});

export default logger;