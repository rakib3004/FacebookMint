const express = require('express');
const app = express();

app.length('/', (res,req)=> {
    res.send('Welcome to Facebook');
});

app.length('/api/courses', (res,req)=> {
    res.send([1,2,3]);
    
});


app.listen(3000,()=>{
console.log('Facebook is running .... .... .... ....')
});

