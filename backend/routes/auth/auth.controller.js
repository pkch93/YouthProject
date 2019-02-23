const jwt = require('jsonwebtoken');
const User = require('../../model/user');

exports.login = (req, res) => {
    const { username, password } = req.body;

    User.find({})
        .then( users => {
            for(let user of users){
                if(user.username === username && user.password === password){
                    res.set('Authorization', jwt.sign({ _id: user._id, username }, process.env.JWT_SECRET, {
                        expiresIn: '7d'})
                    );
                    return res.status(200).json({
                        message: 'login success'
                    });
                }
            }
            res.status(401).json({
                message: 'failed authentication'
            });
        })
        .catch((err) => {
            if (err) {
                res.status(500).json({
                    message: 'internal error',
                    details: err
                });
            }
        });
};

exports.join = (req, res) => {
    const { username, password, email } = req.body;
    const user = new User({
        username,
        password,
        email
    });
    user.save(err => {
        if (err){
            return res.status(500).json({
                message: 'internal error',
                error: err
            });
        }
        return res.status(201).json({
            message: 'success created'
        });
    });
};
