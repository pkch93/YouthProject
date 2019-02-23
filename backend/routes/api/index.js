const router = require('express').Router();

const userRouter = require('./user');
const policyRouter = require('./policy');
const feedbackRouter = require('./feedback');

router.use('/user', userRouter);
router.use('/policies', policyRouter);
router.use('/policies/:policyId', feedbackRouter);

module.exports = router;