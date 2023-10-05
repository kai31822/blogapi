const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//import Routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const tagRoutes = require('./routes/tag');
const categoriesRoutes = require('./routes/categories');
//import DBconnecter
const { sequelize, connectToDB } = require('./connectToDB');

//
const app = express();

const PORT = process.env.PORT || 3000;

/********************\
     Middleware
\********************/
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);
app.use('/tag', tagRoutes);
app.use('/category', categoriesRoutes);
/********************\
      IndexRoutes
\********************/
app.get('/', (request, response) => {
    response.status(200).json({ message: 'Hello from Homepage' });
});

/********************\
    Start listing
\********************/
app.listen(PORT, async () => {
    console.log(`Server running on port : http://localhost:${PORT}`);
    await connectToDB();
});
