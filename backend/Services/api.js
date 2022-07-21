
const express = require('express');
const app = express();


app.use(express.json())

app.post('/status', (req,result)=>{

});


const port = process.env.PORT || 3000;

app.listen(port,()=>{
console.log(`Facebook is running at ${port} .... .... ....`)
});

