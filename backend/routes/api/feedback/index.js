const router = require('express').Router();
const feedbackController = require('./feedback.controller');

router.get('/feedbacks/', feedbackController.getFeedbacks);
router.post('/feedbacks/', feedbackController.createFeedback);
router.put('/feedbacks/:feedbackId');
router.delete('/feedbacks/:feedbackId', feedbackController.deleteFeedback);

module.exports = router;