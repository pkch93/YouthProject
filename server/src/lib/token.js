const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

function generateToken(payload){
    return new Promise( (res, rej) => {
        jwt.sign(payload, jwtSecret, 
            {
                expiresIn: '7d'
            },
            (error, token) => {
                if(error) rej(error);
                res(token);
            }
        );
    });
}

function decodeToken(token){
    return new Promise((res, rej) => {
        jwt.verify(token, jwtSecret, (e, decodedToken) => {
            if(e) rej(e);
            res(decodedToken);
        });
    });
}

exports.jwtMiddleware = async (ctx, next) => {
    const token = ctx.cookies.get("access_token");
    if(!token) return next();

    try {
        const decoded = await decodeToken(token);
        if(Date.now() / 1000 - decoded.iat > 60 * 60 * 24){
            const { _id, username } = decoded;
            const freshToken = await generateToken({_id, username});
            ctx.cookies.set("access_token", freshToken, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 7
            });
        }
        ctx.request.user = decoded;
    } catch (e) {
        ctx.request.user = null;
    }

    return next();
};

exports.generateToken = generateToken;