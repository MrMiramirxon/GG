import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 8888;

// Хранилище для пользователей
const usersStore = {};

// Генерация случайного пользователя
function createRandomUser() {
  const user = {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };

  // Сохранение пользователя в хранилище
  usersStore[user.userId] = user;
  return user;
}

// Создание набора пользователей
function generateUsers(numberOfUsers) {
  Array.from({ length: numberOfUsers }, createRandomUser);
}

// Генерация начальных данных
generateUsers(1000);

// Маршрут для получения всех пользователей
app.get('/api/users', (req, res) => {
  const numberOfUsers = parseInt(req.query.count) || 1000;
  generateUsers(numberOfUsers);
  res.json(Object.values(usersStore));
});

// Маршрут для получения пользователя по UUID
app.get('/api/users/:uuid', (req, res) => {
  const user = usersStore[req.params.uuid];
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
