import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 8888;

const usersStore = {};
const postsStore = {};

function createRandomUser() {
  const user = {
    userId: faker.datatype.uuid(), 
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
  usersStore[user.userId] = user;
  return user;
}

function createRandomPost(userId) {
  const imageUrls = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/350'
  ];

  return {
    postId: faker.datatype.uuid(), 
    userId, 
    image: faker.helpers.arrayElement(imageUrls),
    caption: faker.lorem.sentence(),
    likes: faker.datatype.number({ min: 0, max: 1000 }),
    dislikes: faker.datatype.number({ min: 0, max: 100 }),
    comments: Array.from({ length: faker.datatype.number({ min: 0, max: 5 }) }, () => ({
      commentId: faker.datatype.uuid(), 
      userId: faker.helpers.arrayElement(Object.keys(usersStore)),
      text: faker.lorem.sentence(),
    })),
  };
}

function generateData(numberOfUsers, numberOfPosts) {
  Array.from({ length: numberOfUsers }, createRandomUser);
  
  Object.keys(usersStore).forEach(userId => {
    Array.from({ length: numberOfPosts }, () => {
      const post = createRandomPost(userId);
      postsStore[post.postId] = post;
    });
  });
}

generateData(100, 10); 

app.get('/api/users', (req, res) => {
  res.json(Object.values(usersStore));
});


app.get('/api/users/:uuid', (req, res) => {
  const user = usersStore[req.params.uuid];
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});


app.get('/api/posts', (req, res) => {
  res.json(Object.values(postsStore));
});


app.get('/api/posts/:postId', (req, res) => {
  const post = postsStore[req.params.postId];
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
