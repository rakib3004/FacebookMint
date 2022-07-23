
const express = require('express');
const app = express();





const statusRoute = require('./Routes/status');

app.use(express.json())
app.use('/api/status', statusRoute);

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

