const router = require('express').Router();

const userRouter = require('./user');
const policyRouter = require('./policy');
const feedbackRouter = require('./feedback');

router.use('/user', userRouter);
router.use('/policies/', feedbackRouter);
router.use('/policies/', policyRouter);

module.exports = router;