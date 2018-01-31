-- users table schema
CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(225) UNIQUE NOT NULL,
	password_digest TEXT NOT NULL,
	email VARCHAR(225) UNIQUE NOT NULL
);

-- movies table schema
CREATE TABLE IF NOT EXISTS movies (
	id SERIAL PRIMARY KEY,
	title VARCHAR(225),
	description TEXT,
	genre VARCHAR(225),
	user_id INT REFERENCES users(id)
);