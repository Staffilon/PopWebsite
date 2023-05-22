const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode =
        res.statusCode === 200 ? constants.SERVER_ERROR : res.statusCode;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.DUPLICATE_ERROR:
            res.json({
                title: "Duplicate",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            res.status(statusCode).json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
    }
};

module.exports = errorHandler;
