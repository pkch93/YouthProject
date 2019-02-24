const router = require('express').Router();
const userController = require('./user.controller');

router.get('/:id', userController.getUser);
router.get('/:id/mypolicy', userController.myPolicy);
router.put('/:id/update', userController.updateUser);
router.delete('/:id/delete', userController.exitUser);

module.exports = router;