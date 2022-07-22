
const express = require('express');
const app = express();


app.use(express.json())




const mongoose = require('mongoose');

var cors = require('cors');

app.use(cors({
    origin:"http://localhost:4200"
}))

mongoose.connect('mongodb://localhost:27017/Mint',
{
    useNewUrlParser : true
}
,()=>{
    console.log('database connected')
});


app.post('/status', (req,result)=>{
    console.log(req.body)
    });

app.get('/status', (req,result)=>{
    console.log(req.body);
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
console.log(`Facebook is running at ${port} .... .... ....`)
});

