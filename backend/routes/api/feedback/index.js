const router = require('express').Router();
const feedbackController = require('./feedback.controller');

router.get('/:policyId/feedbacks/', feedbackController.getFeedbacks);
router.post('/:policyId/feedbacks/', feedbackController.createFeedback);
router.put('/:policyId/feedbacks/:feedbackId', feedbackController.updateFeedback);
router.delete('/:policyId/feedbacks/:feedbackId', feedbackController.deleteFeedback);

module.exports = router;