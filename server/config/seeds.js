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
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
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
