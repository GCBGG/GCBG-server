const express = require('express');
const app = express();
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const cors = require('cors');
const { sign } = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use('/api/login', loginRouter);
app.use('/api/signup', signupRouter);

const port = 8000;

// CORS 하용 설정하기.
app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.listen(port, () => {
    console.log(`server open localhost:${port}`);
});