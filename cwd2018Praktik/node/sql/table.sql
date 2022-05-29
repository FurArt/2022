CREATE TABLE users(
  id serial PRIMARY KEY,
  name VARCHAR(100),
  email text UNIQUE NOT NULL,
  joined TIMESTAMP NOT NULL
);

CREATE TABLE login(
    id serial  PRIMARY KEY,
    hash character varying(100),
    email text UNIQUE NOT NULL
);

INSERT INTO login (email, hash) VALUES ('qwerty@qwerty', '$2b$10$z7fgQEJU55LPSkxfSUSRg.E3Ig7ElOzIymmF7NySHIVy.hGe65Y1.') RETURNING email;

INSERT INTO users(name, email, joined) VALUES ('qwerty', 'qwerty@qwerty', NOW());

Select * from users WHERE id = 16;
Select * from users;
DROP TABLE login;
DELETE FROM users WHERE email = 'qwerty@qwerty';
DELETE FROM login WHERE email = 'qwerty@qwerty';

ALTER TABLE users
ADD entries BIGINT;

ALTER TABLE users ALTER COLUMN entries SET DEFAULT 0;

UPDATE users 
SET entries = 1,
WHERE id = "16";

UPDATE users
SET entries = 1
WHERE id = 16;