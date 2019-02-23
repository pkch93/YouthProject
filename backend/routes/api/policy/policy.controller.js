const Policy = require('../../../model/policy');

exports.getPolicies = (req, res) => {
    const { type } = req.query;
    try {
        let policies;
        if (!type){
            policies = Policy.find({});
        } else {
            policies = Policy.find({type});
        }
        res.status(200).json({
            policies
        });
    } catch (err) {
        res.status(500).json({
            massage: 'internal error'
        });
    }
};

exports.getPolicy = (req, res) => {
    const { policyId } = req.params;
    try {
        const policy = Policy.findOne({ _id: policyId});
        res.status(200).json({
            policy
        });
    } catch (err) {
        res.status(500).json({
            massage: 'internal error'
        });
    }
};
