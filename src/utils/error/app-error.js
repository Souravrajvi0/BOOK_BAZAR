class AppError extends Error {
    constructor(message,statusCode,explanation){
        super(message);
        this.explanation = explanation,
        this.statusCode = statusCode
    }
}

module.exports = AppError