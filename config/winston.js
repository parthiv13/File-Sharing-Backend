const winston = require('winston');

var options = {
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
        format: winston.format.simple()
    }
};

const ignorePrivate = winston.format((info, opts) => {
    if(info.private) { 
        return false;
    }
    return info;
});

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        ignorePrivate(),
        winston.format.json()
    ),
    defaultMedia: { service: 'user-service' },
    transports: [
        new winston.transports.Console(options.console),
        new winston.transports.File({
            filename: './logs/error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: './logs/info.log',
            level: 'info'
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' })
    ],
    exitOnError: false
});

//At Production Level
/*logger.exceptions.handle(
    new transports.File({filename: '../logs/exceptions.log'})
)
*/
logger.stream = {
    write: function(message, encoding) {
        logger.info(message);
    }
}

/*if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}*/

module.exports = logger; 
