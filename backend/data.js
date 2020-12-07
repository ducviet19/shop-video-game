import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
          name: 'Viet',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [
        {
           
            name: 'Among US',
            category:'Game',
            image: "../image/header.jpg",
            price: 120,
            brand: 'Game',
            rating: 3,
            countInStock: 10,
            numReviews: 10,
            description: 'high quality product'
        },
        {
           
            name: 'League of Legend',
            category:'Shirt',
            image: "../image/header.jpg",
            price: 120,
            brand: 'Nike',
            rating: 4.5,
            countInStock: 10,
            numReviews: 4,
            description: 'high quality product'
        },
        {
           
            name: 'Pubg',
            category:'Pant',
            image: "../image/header.jpg",
            price: 120,
            brand: 'Nike',
            rating: 2,
            countInStock: 10,
            numReviews: 9,
            description: 'high quality product'
        },
        {
           
            name: 'Dota',
            category:'Pant',
            image: "../image/header.jpg",
            price: 120,
            brand: 'Nike',
            rating: 4.5,
            countInStock: 10,
            numReviews: 10,
            description: 'high quality product'
        },
        {
          
            name: 'Cross fire',
            category:'Pant',
            image: "../image/header.jpg",
            price: 120,
            brand: 'Nike',
            rating: 4.5,
            countInStock: 0,
            numReviews: 10,
            description: 'high quality product'
        }
    ]
};

export default data;