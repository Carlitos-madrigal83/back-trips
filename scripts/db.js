const { sql } = require("slonik");


const create = async (db) => {
  await db.query(sql`
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  
  CREATE TABLE IF NOT EXISTS users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(20) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS trips(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    ubication point NOT NULL
);

CREATE TABLE IF NOT EXISTS favorites(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    ubication point NOT NULL
);
  `);
};

const populate = async (db) => {

      await db.query(sql`
      INSERT INTO users (
        username, email, password
      ) VALUES (
        'Carlos', 'carlos_madrigal@gmail.com', '1234567890'
      );
      
      INSERT INTO trips (
        ubication
      ) VALUES (
        '40.156968553418004, -3.8775412623896672'
      ); 
      
      INSERT INTO favorites (
        user_id, ubication
      ) VALUES (
        (SELECT id FROM users WHERE email='carlos_madrigal@gmail.com'),
        '40.156968553418004, -3.8775412623896672'
      );
      `);
};

const main = async () => {
  try {
    const db = await require("../configs/db");

    await create(db);
    console.info("> creation completed");

    await populate(db);
    console.info("> population completed");
  } catch (error) {
    console.info("> db error: ", error.message);
  }
};

main();
