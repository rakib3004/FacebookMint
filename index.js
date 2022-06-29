const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.send('Welcome to Facebook');
});

app.get('/friends', (req,res)=> {
    res.send(['Muktar','Siam','Mushfiq','Mohsin','Ashraf','Tasmia','Mustahid','Khairul','Sakib','Fahad','Kazi','Jafar']);
    
});

app.get('/posts', (req,res)=> {
    res.send(['Al hamdulillah 632 problem solved in codeforeces','Started School at University of Dhaka','Office Secretary at Khilkhet Pathagar','Tanguar Haor Tour','Kurmitolian Reunion 2020']);
    
});


app.listen(3000,()=>{
console.log('Facebook is running .... .... .... ....')
});

