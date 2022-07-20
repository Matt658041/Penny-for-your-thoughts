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
    {
      name: 'Nelson Mandela',
      category: categories[4]._id,
      description: "It always seems impossible until it's done.",
      image: 'nelson.jpg',
      price: 13.75,
      quantity: 900
    },
    {
      name: 'Samuel Beckett',
      category: categories[4]._id,
      description: 'Ever tried. Ever failed. No matter. Try Again. Fail. Flain better.',
      image: 'samuel.jpg',
      price: 9.99,
      quantity: 1000
    },
    {
      name: 'Alice Morse Earl',
      category: categories[4]._id,
      description: 'Not everyday is good but there is something good in every day',
      image: 'Alice.jpg',
      price: 15.99,
      quantity: 8000
    },
    {
      name: 'Albert Einstein',
      category: categories[4]._id,
      description: 'You only fail when you stop trying',
      image: 'albertEinstein.jpg',
      price: 3.99,
      quantity: 6000
    },
    {
      name: 'Brooke Shields',
      category: categories[4]._id,
      description: "Don't waste a minute not being happy. If one window closes, run to the next window - or break down a door",
      image: 'brooke.jpg',
      price: 5.99,
      quantity: 100
    },
    {
      name: 'Lao Tzu',
      category: categories[4]._id,
      description: 'Mastering others is strength. Mastering yourself is true power',
      image: 'lao.jpg',
      price: 19.99,
      quantity: 2000
    },
    {
      name: 'Theodore Roosevelt',
      category: categories[4]._id,
      description: "Believe you can and you're halfway there.",
      image: 'Theodore.jpg',
      price: 75.99,
      quantity: 200
    },
    {
      name: 'William James',
      category: categories[4]._id,
      description: 'Act as if what you do makes a difference. It does.',
      image: 'William.jpg',
      price: 19.99,
      quantity: 2000
    },
    {
      name: 'Tony Payne',
      category: categories[3]._id,
      description: 'Have fun... lots of it.',
      image: 'tonipayne.jpeg',
      price: 19.99,
      quantity: 2000
    },
    {
      name: 'Walter Lee',
      category: categories[3]._id,
      description: 'Hard work never killed anybody, but why take a chance?',
      image: 'walterlee.webp',
      price: 19.99,
      quantity: 2000
    },
    {
      name: 'The Floor',
      category: categories[3]._id,
      description: "If you fall, I'll always be there.",
      image: 'thefloor.webp',
      price: 19.99,
      quantity: 2000
    },
    {
      name: 'Hellen Keller',
      description:
        'Life is either a daring adventure or nothing at all.',
      image: 'HelenKeller.jpg',
      category: categories[3]._id,
      price: 2000.99,
      quantity: 500
    },
    {
      name: 'Randy Pausch',
      description:
        'Never, ever underestimate the importance of having fun.',
      image: 'RandyPausch.jpg',
      category: categories[03]._id,
      price: 400.99,
      quantity: 500
    },
    {
      name: 'Will Thomas',
      description:
        "There's no fear when you're having fun.",
      image: 'WillThomas.jpg',
      category: categories[3]._id,
      price: 99,
      quantity: 500
    },
    {
      name: 'Km-Diary',
      description:
        ' Change your plans, not your standards.',
      image: 'km-diary.jpg',
      category: categories[0]._id,
      price: 6000.99,
      quantity: 900
    },
    {
      name: 'Analects',
      description:
        'Virtue is not left to stand alone. He who practices it will have neighbors.',
      image: 'analects.jpg',
      category: categories[0]._id,
      price: 700.99,
      quantity: 1000
    },
    {
      name: 'Michael Scott',
      category: categories[3]._id,
      description: 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.',
      image: 'michaelScott.jpg',
      price: 19.99,
      quantity: 2000
    },
    {
      name: 'Albert Einstein',
      category: categories[3]._id,
      description: 'Creativity is intelligence having fun.',
      image: 'AlbertEinstein1.jpg',
      price: 19.99,
      quantity: 2000
    },

  console.log('products seeded'),

  await User.deleteMany(),

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