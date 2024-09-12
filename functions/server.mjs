import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 8888;


function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}


app.get('/api/users', (req, res) => {
  const numberOfUsers = parseInt(req.query.count) || 1000; 
  const users = Array.from({ length: numberOfUsers }, createRandomUser);
  res.json(users);
});
app.get('/api/yyy', (req, res) => {
  const numberOfUsers = parseInt(req.query.count) || 1000; 
  const users = Array.from({ length: numberOfUsers }, createRandomUser);
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// huhuhu