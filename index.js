const express = require('express');
const app = express();
const router = require('./routes/route');

app.use(express.json());

app.use('/', router);

app.listen(8000, () => {
    console.log("Server is running on Port 8000");
})