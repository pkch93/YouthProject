const router = require('express').Router();
const userController = require('./user.controller');

router.get('/:id', userController.getUser);
router.put('/:id/update', userController.updateUser);
router.delete('/:id/delete', userController.exitUser);

module.exports = router;