
const bodyHasEmail = (request, response, next) => {
    if (request.body.email) {
        next();
    } else {
        request.errors.push("Missing email.")
        next();
    }
}

const bodyHasPassword = (request, response, next) => {
    if (request.body.password) {
        next();
    } else {
        request.errors.push("Missing password.")
        next();
    }

}

const emailIsValid = (request, response, next) => {
    // ? = a null operator. If email is truthy, move to next part of code. If email is null, stop.
    if (request.body.email?.includes("@")) {
        next();
    } else {
        request.errors.push("Email is not valid.")
        next();
    }

}

module.exports = { bodyHasEmail, bodyHasPassword, emailIsValid }