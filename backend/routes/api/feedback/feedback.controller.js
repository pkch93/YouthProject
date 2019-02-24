const Feedback = require('../../../model/feedback');

exports.getFeedbacks = async (req, res) => {
    const { policyId } = req.params;
    console.log(policyId);
    try {
        const feedbacks = await Feedback.find({policy: policyId});
        if (feedbacks.length !== 0){
            res.status(200).json({
                feedbacks
            });
        } else {
            res.status(503).json({
                message: 'this policy don\'t have feedback'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'internal error'
        });
    }
};

exports.createFeedback = (req, res) => {
    const { policyId } = req.params;
    const { title, content } = req.body;
    const feedback = new Feedback({
        title,
        content,
        writer: req.user._id,
        policy: policyId
    });
    feedback.save(err => {
        if (err){
            res.status(500).json({
                message: 'internal error'
            });
        }
    });
    res.status(201).json({
        feedback
    });
};

exports.updateFeedback = async (req, res) => {
    const { feedbackId } = req.params;
    if (feedbackId !== req.uesr._id) {
        res.status(403).json({
            message: 'you don\'t have permission to access this data'
        });
    }
    const feedback = await Feedback.findOne({_id: feedbackId});
    const { title, content } = req.body;
    feedback.title = title;
    feedback.content = content;
    feedback.save();
    res.status(200).json({
        feedback
    });
};

exports.deleteFeedback = async (req, res) => {
    const { feedbackId } = req.params;
    const feedback = await Feedback.findOne({_id: feedbackId});
    try {
        feedback.delete();
    } catch (err) {
        res.status(500).json({
            message: 'internal error'
        });
    }
    res.status(200).json({
        message: 'delete success'
    });
};
// 생성, 수정, 삭제
