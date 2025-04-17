const HttpStatus = require("http-status-codes");
const HttpErrors = require('http-errors');

const ErrorHandler = (err, req, res, next) => {

}

const NotFoundError = (req, res, next) => {
};

module.exports = { ErrorHandler, NotFoundError };
