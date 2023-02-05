// const express = require('express');
// const errorMiddleware = require('../api/middlewares/error');
// const categoriesRoute = require('../api/routers/categories.router');
// const loginRoute = require('../api/routers/login.router');
// const userRoute = require('../api/routers/user.router');
// const postRoute = require('../api/routers/post.router');
// // ...
// const app = require('express')();
// const { v4 } = require('uuid');

// app.get('/api', (req, res) => {
//   const path = `/api/item/${v4()}`;
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
// });

// app.get('/api/item/:slug', (req, res) => {
//   const { slug } = req.params;
//   res.end(`Item: ${slug}`);
// });

// app.use(express.json());

// app.use('/api/login', loginRoute);
// app.use('/api/user', userRoute);
// app.use('/api/categories', categoriesRoute);
// app.use('/api/post', postRoute);

// app.use(errorMiddleware);

// // ...

// // É importante exportar a constante `app`,
// // para que possa ser utilizada pelo arquivo `src/server.js`
// module.exports = app;
