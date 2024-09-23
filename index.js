const express = require('express')
const app = express()
const port = 3000


/*

// working with data

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// query parameter
app.get('/search', (req, res)=>{
    const query = req.query.name;
    res.send(`Search result for ${query}`);
})

// URL parameter
app.get('/user/:id', (req, res)=>{
    res.send(`User id is ${req.params.id}`);
})

app.post('/user', (req, res)=>{
    const user = req.body;
    res.send(`user ${user.name} added!`);
})


*/

// CRUD Operations

let users = [];

app.get('/', (req, res)=>{
    res.json(users);
})

app.post('/users', (req, res)=>{
    users.push(req.body);
    res.send('User added');
})

app.put('/users/:id', (req, res)=>{
    const userId = req.params.id;
    users[userId] = req.body;
})

app.delete('/users/:id', (req, res)=>{
    const userId = req.params.id;
    users.splice(userId,1);
    res.send("user delete");

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})