const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Chinese quotes' },
    { name: 'Famous Persons' },
    { name: 'Intellectuals' },
    { name: 'Fun Quotes' },
    { name: 'Motivational' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Confucius',
      description:
        'Everything has beauty, but not everyone sees it.',
      image: 'confucius.jpg',
      category: categories[0]._id,
      price: 2000.99,
      quantity: 500
    },
    {
      name: 'Chinese Proverb',
      description:
        'The scent of a rose will always stay on the hand of the giver.',
      image: 'chinese.jpg',
      category: categories[0]._id,
      price: 2000.99,
      quantity: 900
    },
    {
      name: 'Audrey Hepburn',
      description:
        'Nothing is impossible the word itself says I am possible.',
      image: 'hepburn.jpg',
      category: categories[1]._id,
      price: 1000.99,
      quantity: 500
    },
    {
      name: 'Margaret Mead',
      category: categories[1]._id,
      description:
        'Always remember that you are absolutely unique. Just like everyone else.',
      image: 'margaretmead1.jpg',
      price: 7000.99,
      quantity: 20
    },
    {
      name: 'Arthur Ashe',
      category: categories[1]._id,
      description:
        'Start where you are. Use what you have. Do what you can.',
      image: 'life-changing.jpg',
      price: 300.99,
      quantity: 50
    },
    {
      name: 'Brene Brown',
      category: categories[1]._id,
      description:
        'Courage starts with showing up an letting ourselves be seen.',
      image: 'brene.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Albert Einstein',
      category: categories[2]._id,
      description:
        'Life is like riding a bicycle To keep your balance, you must keep moving.',
      image: 'albert.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Benjamin Disraeli',
      category: categories[2]._id,
      description:
        'The fool wonders, the wise man asks.',
      image: 'benjamin.jpg',
      price: 199.99,
      quantity: 300
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
