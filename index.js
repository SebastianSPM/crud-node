require('dotenv').config()

const express = require('express');
const app = express();

const mainRouter = require('./src/routes/main.router')
app.use(mainRouter)

app.use('/products', require('./src/routes/products.router'))

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));