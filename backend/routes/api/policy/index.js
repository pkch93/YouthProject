const router = require('express').Router();
const policyController = require('./policy.controller');

router.use('/', policyController.getPolicies);
router.use('/:policyId', policyController.getPolicy);

module.exports = router;