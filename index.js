const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.send('Welcome to Facebook');
});

app.get('/friends', (req,res)=> {
    res.send(['Muktar','Siam','Mushfiq','Mohsin','Ashraf','Tasmia','Mustahid','Khairul','Sakib','Fahad','Kazi','Jafar']);
    
});

app.get('/api/courses', (req,res)=> {
    res.send([1,2,3,4,5,6,7,8]);
    
});

app.get('/api/posts/:year/:month', (req,res)=> {
    res.send(req.params);
    
});

app.get('/api/members/:year/:month', (req,res)=> {
    res.send(req.query);
    
});
app.get('/posts', (req,res)=> {
    res.send(['Al hamdulillah 632 problem solved in codeforeces','Started School at University of Dhaka','Office Secretary at Khilkhet Pathagar','Tanguar Haor Tour','Kurmitolian Reunion 2020']);
    
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
console.log(`Facebook is running at ${port} .... .... ....`)
});

