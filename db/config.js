// option object to log each query
const options = {
	query: (e) => {
		console.log(e.query)
	}
}

// require/config pg-promise
const pgp = require('pg-promise')(options)

// create and call setDatabase()
function setDatabase() {
	if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
		return pgp({
			database: 'movies_app',
			port: 5432,
			host: 'localhost',
		})
	} else if (process.env.NODE_ENV === 'production') {
		return pgp(process.env.DATABASE_URL)
	}
}

const db = setDatabase()

// export db
module.exports = db