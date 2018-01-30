// import dependencies
const bcrypt = require('bcryptjs')
const User = require('../models/user.js')

// initiate usersController object
const usersController = {}

// account creation
usersController.create = (req, res, next) => {
	const salt = bcrypt.genSaltSync()
	const hash = bcrypt.hashSync(req.body.password, salt)
	User.create({
		username: req.body.username,
		email: req.body.email,
		password_digest: hash,
	}).then(user => {
		req.login(user, (err) => {
			if (err) return next(err)
				res.status(201).json({
					message: 'user created',
					auth: true,
					data: {
						user,
					}
				})
			}
		)
	})
}

// export controller
module.exports = usersController;