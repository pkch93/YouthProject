const Policy = require('../../../model/policy');

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
