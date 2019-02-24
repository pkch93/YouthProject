const Policy = require('../../../model/policy');
const MyPolicy = require('../../../model/my_policy');

exports.getPolicies = async (req, res) => {
    const { category } = req.query;
    try {
        let policies;
        if (!category){
            policies = await Policy.find({});
        } else {
            policies = await Policy.find({ category });
        }
        res.status(200).json({
            policies
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            massage: 'internal error'
        });
    }
};

exports.getPolicy = async (req, res) => {
    const { policyId } = req.params;
    try {
        const policy = await Policy.findOne({ _id: policyId });
        res.status(200).json({
            policy
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            massage: 'internal error'
        });
    }
};

exports.searchPolicy = async (req, res) => {
    const { q, category } = req.query;
    const regex = new RegExp('/[0-9a-zA-Z가-히 ]*'+ q + '[0-9a-zA-Z가-히 ]*/');
    const searchResult = [];
    const names = {
        intern: 'collectJobsNm',
        event: 'eventNm',
        governJob: 'bsnsNm',
        youthPolicy: 'busiNm'
    };
    try{
        if (!category){
            for (let name in names){
                let items = await Policy.find({category: name, details: {names[name]: {$regex: regex}}});
                searchResult.concat(items);
            }
        } else {
            let items = await Policy.find({category, details: {names[category]: {$regex: regex}}});
            searchResult.concat(items);
        }
    } catch(err) {
        if (err){
            console.error(err);
            res.status(500).json({
                message: 'internal error'
            });
        }
    }
    res.status(200).json({
        searchResult
    });
};

exports.likePolicy = async (req, res) => {
    const userId  = req.user._id;
    const { policyId } = req.params;
    const target = await MyPolicy.findOne({ user: userId, policy: policyId });
    if (!target) {
        const myPolicy = new MyPolicy({
            like: true,
            user: userId,
            policy: policyId
        });
        myPolicy.save();
    } else {
        target.like = target.like ? false : true;
        target.save();
    }
    res.status(200).json({
        message: 'like request success'
    });
};

exports.takePolicy = async (req, res) => {
    const userId  = req.user._id;
    const { policyId } = req.params;
    const target = await MyPolicy.findOne({ user: userId, policy: policyId });
    if (!target) {
        const myPolicy = new MyPolicy({
            take: true,
            user: userId,
            policy: policyId
        });
        myPolicy.save();
    } else {
        target.take = target.like ? false : true;
        target.save();
    }
    res.status(200).json({
        message: 'take request success'
    });
};