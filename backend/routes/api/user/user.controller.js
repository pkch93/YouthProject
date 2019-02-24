const User = require('../../../model/user');
const MyPolicy = require('../../../model/my_policy');


exports.getUser = async (req, res) => {
    if (!req.user) 
        return res.status(403).json({
            message: 'you need to login'
        });
    const { _id } = req.user;
    try {
        const {username, email, createAt } = await User.findOne({_id});
        res.status(200).json({
            username,
            email,
            createAt
        });
    } catch(err) {
        if (err) res.status(500).json({
            message: 'internal error'
        });
    }
};

exports.updateUser = async (req, res) => {
    if (!req.user){
        return res.status(403).json({
            message: 'you need to login'
        });
    } else {
        const { id } = req.params.id;
        const { password, email } = req.body;
        try {
            const user = await User.findOne({id});
            user.password = password;
            user.email = email;
            user.save();
        } catch(err) {
            if (err) res.status(500).json({
                message: 'internal error'
            });
        }
        res.status(200).json({
            message: 'update success'
        });
    }
};

exports.exitUser = async (req, res) => {
    if (!req.user){
        return res.status(403).json({
            message: 'you need to login'
        });
    } else {
        const { id } = req.params.id;
        try {
            const user = await User.findOne({ id });
            user.remove();
        } catch(err) {
            if (err) res.status(500).json({
                message: 'internal error'
            });
        }
        res.status(200).json({
            message: 'delete success'
        });
    }
};

exports.myPolicy = async (req, res) => {
    const userId = req.user._id;
    try {
        const myPolicy = await MyPolicy.find({user: userId});
        res.status(200).json({
            myPolicy
        });
    } catch (err) {
        res.status(500).json({
            message: 'internal error'
        });
    }
};  