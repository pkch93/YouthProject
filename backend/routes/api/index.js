const router = require('express').Router();

const userRouter = require('./user');
const feedbackRouter = require('./feedback');

router.use('/user', userRouter);
router.use('/policy/:policyId', feedbackRouter);

module.exports = router;