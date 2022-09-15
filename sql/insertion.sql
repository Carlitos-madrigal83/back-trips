DELETE FROM users WHERE email='carlos_madrigal@gmail.com';
DELETE FROM trips WHERE ubication ~= '40.156968553418004, -3.8775412623896672';
DELETE FROM favorites WHERE user_id=(SELECT id FROM users WHERE email='carlos_madrigal@gmail.com');

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