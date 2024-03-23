// backend/jwt.js

import jwt from 'jsonwebtoken';

export const init_jwt = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {});
};

export const authenticate = (req, res, role) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    console.log(token);

    if (!token) {
        // Unauthorized
        return res.statusCode = 401;
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            // Forbidden
            return res.statusCode = 403;
        }
        if (user.type !== role) { // check user type
            return res.statusCode = 403;
        }
    });
};

export default {
    init_jwt,
    authenticate, 
};