const jwt = require('jsonwebtoken');

exports.generateToken = (id) => {
    return jwt.sign({id}, process.env.jwt_SECRET, { expiresIn: "30d" })
};

  