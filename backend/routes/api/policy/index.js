const router = require('express').Router();
const policyController = require('./policy.controller');

router.get('/:policyId', policyController.getPolicy);
router.get('/:policyId/search', policyController.searchPolicy);
router.put('/:policyId/like', policyController.likePolicy);
router.put('/:policyId/take', policyController.takePolicy);
router.get('/', policyController.getPolicies);

module.exports = router;