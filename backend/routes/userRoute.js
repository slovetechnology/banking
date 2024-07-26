const { SignupUserAccount } = require('../controllers/userController')

const router = require('express').Router()

router.post('/signup', SignupUserAccount)

module.exports = router