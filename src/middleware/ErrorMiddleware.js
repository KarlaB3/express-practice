
const errorCheck = (request, response, next) => {
    if (request.errors.length > 0) {
        response.status(400).json({
            errors: request.errors
        });
    } else {
        next();
    }
}

module.exports = { errorCheck }