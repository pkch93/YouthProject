const jwt = require('jsonwebtoken');

const decodeToken = (token) => {
    return new Promise((res, rej) => {
        jwt.verify(token, process.env.JWT_SECRET, (e, decodedToken) => {
            if(e) rej(e);
            res(decodedToken);
        });
    });
};

exports.isLogined = async (req, res, next) => {
    const authToken = req.get('Authorization');
    if (authToken) {
        const [type, jwtToken] = authToken.split(' ');
        if (type === 'Bearer') {
            const decoded = await decodeToken(jwtToken);
            if (Date.now() / 1000 - decoded.iat < 60*60*24){
                const { _id, username } = decoded;
                const newToken = jwt.sign(
                    {_id, username}, process.env.JWT_SECRET, {
                        expiresIn: '7d'
                    }
                );
                res.set('Authorization', newToken);
            }
            req.user = decoded;
            return res.status(200).json({
                message: 'login success'
            });
        }
    }
    return next();
}; // authToken으로 로그인 여부 판단 후 token 주입

exports.verifyJwtToken = async (req, res, next) => {
    const authToken = req.get('Authorization');
    if (!authToken) {
        return res.status(403).json({
            message: 'you need to login'
        });
    }

    const [type, jwtToken] = authToken.split(' ');

    try {
        req.user = await decodeToken(jwtToken);
        return next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(419).json({
                message: 'your jwt token is expired. please try to get jwt token again'
            });
        }
        return res.status(401).json({
            message: 'this token is invaild'
        });
    }
};