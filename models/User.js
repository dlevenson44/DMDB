//import config file
const db = require('../db/config')

// initiate User object
const User = {}

// find by username function
User.findByUserName = userName => {
	return db.oneOrNone(`
		SELECT * FROM users
		WHERE username = $1
		`, [userName]);
};

// create user function
User.create = user => {
	return db.one(`
		INSERT INTO users
		(username, email, password_digest)
		VALUES ($1, $2, $3)
		RETURNING *
		`, [user.username, user.email, user.password_digest]);
};

// export model
module.exports = User;