// import bcrypt dependency
const bcrypt = require('bcryptjs')

// verify match between password entered and password on db
function comparePass(userPassword, databasePassword) {
	return bcrypt.compareSync(userPassword, databasePassword)
}

// export functions
module.exports = {
	comparePass,
}