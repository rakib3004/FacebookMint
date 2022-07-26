
const express = require('express');
const Minio = require('minio');
const passport = require('passport');

const mongoose = require('mongoose');

const cors = require('cors'); 


const statusRoute = require('./Routes/status');
const storyRoute = require('./Routes/story');
const userRoute = require('./Routes/auth')



const app = express();
app.use(cors({origin: '*'}));

app.use(express.json())
app.use(passport.initialize());
app.use('/profile', statusRoute);
app.use('/profile', storyRoute);
app.use('/profile', userRoute);





 //app.use(cors({credentials: true, origin : 'http://localhost:4200'}));


mongoose.connect('mongodb://localhost:27017/Mint',
{
    useNewUrlParser : true
}
,()=>{
    console.log('database connected')
});

const minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: process.env.ACCESS_KEY,
    secretKey: process.env.SECRET_KEY
});


const port = process.env.PORT || 3000;

app.listen(port,()=>{
console.log(`Facebook is running at ${port} .... .... ....`)
});

