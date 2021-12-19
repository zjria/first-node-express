const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const port = 5000;


app.get('/', (req, res)=>{
  res.send("Waw, I am Learning node width Jhankar Mahabub Vi. Fine My First Learning at time");
})



// app.get('/users', (req, res)=>{
//   res.send(
    
//     {id: '1', name: 'sabana', email: 'sabana@gmail.com'},  
//     {id: '2', name: 'srabonti', email: 'srabonti@gmail.com'},  
//     {id: '3', name: 'sraboni', email: 'sraboni@gmail.com'},  
//     {id: '4', name: 'sakila', email: 'sakila@gmail.com'},  
//     {id: '5', name: 'sabnon', email: 'sabnon@gmail.com'},  
//     {id: '6', name: 'sabnur', email: 'sabnur@gmail.com'}
  
//   )
// })

const users = [    
  {id: '0', name: 'susmita', email: 'susmita@gmail.com'},  
  {id: '1', name: 'sabana', email: 'sabana@gmail.com'},  
  {id: '2', name: 'srabonti', email: 'srabonti@gmail.com'},  
  {id: '3', name: 'sraboni', email: 'sraboni@gmail.com'},  
  {id: '4', name: 'sakila', email: 'sakila@gmail.com'},  
  {id: '5', name: 'sabnon', email: 'sabnon@gmail.com'},  
  {id: '6', name: 'sabnur', email: 'sabnur@gmail.com'}
]

// search quary 

app.get('/users', (req, res)=>{    
    const search = req.query.search;
    if(search){
      const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
      res.send(searchResult);
    }
    else{
      res.send(users)
    }
})

// dynamic API

app.get('/users/:id', (req, res)=>{
  const id = req.params.id;
  const member = users[id];
  res.send(member);
})

app.get('/users', (req, res)=>{
  res.send(users)
})

app.get('/fruits/mangos/fazlis', (req, res)=>{
  res.send("Fazlis is very not greed");
})

app.get('/fruits', (req, res)=>{
  res.send(['mango', 'banana', 'apple']);
})



// get post
app.post('/users', (req, res)=>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting the post', req.body);

  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});















// listen sentence
app.listen(port, ()=>{
  console.log("play My node server", port);
})


