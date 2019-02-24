const router = require('express').Router();
const policyController = require('./policy.controller');

router.use('/:policyId', policyController.getPolicy);
router.use('/', policyController.getPolicies);

module.exports = router;