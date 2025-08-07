class AppError extends Error {
    constructor(message, statusCode, explanation) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.explanation = explanation;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
