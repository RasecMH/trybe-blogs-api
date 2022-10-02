const express = require('express');
const errorMiddleware = require('./middlewares/error');
const categoriesRoute = require('./routers/categories.router');
const loginRoute = require('./routers/login.router');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/categories', categoriesRoute);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
