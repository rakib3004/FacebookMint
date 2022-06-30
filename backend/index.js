const Joi = require('joi');

const express = require('express');
const app = express();


app.use(express.json())
const courses = [
    {id:1 ,name: 'Software Design' },
    {id:2 ,name: 'Software Metrics' },
    {id:3 ,name: 'Software Security' }

]

app.get('/', (req,res)=> {
    res.send('Welcome to Facebook');
});

app.get('/friends', (req,res)=> {
    res.send(['Muktar','Siam','Mushfiq','Mohsin','Ashraf','Tasmia','Mustahid','Khairul','Sakib','Fahad','Kazi','Jafar']);
    
});

app.get('/posts', (req,res)=> {
    res.send(['Al hamdulillah 632 problem solved in codeforeces','Started School at University of Dhaka','Office Secretary at Khilkhet Pathagar','Tanguar Haor Tour','Kurmitolian Reunion 2020']);
    
});


app.get('/api/courses', (req,res)=> {
    res.send(courses);
    
});

app.get('/api/courses/:id', (req,res)=> {
    const course = courses.find(c=>c.id===parseInt(req.params.id));

    if(!course) res.status(404).send('This course is not available');
    res.send(course);
    
});

app.post('/api/courses', (req,res)=>{

   
  
    if(!req.body.name || req.body.name.length<3){
        res.status(400).send('Name must be greater than 3 characters');
        return;
    }
const course = {
    id: courses.length+1,
    name: req.body.name,
}
courses.push(course);
res.send(course);

});



app.put('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id));

    if(!course) res.status(404).send('This course is not available');

    course.name = req.body.name;
    res.send(courses)
})
app.get('/api/posts/:year/:month', (req,res)=> {
    res.send(req.params);
    
});

app.delete('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id));

    if(!course) res.status(404).send('This course is not available and we are unable to delete it');

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(courses);
})
app.get('/api/posts/:year/:month', (req,res)=> {
    res.send(req.params);
    
});

app.get('/api/members/:year/:month', (req,res)=> {
    res.send(req.query);
    
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
console.log(`Facebook is running at ${port} .... .... ....`)
});

