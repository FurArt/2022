const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const app = express();

//block use
app.use( bodyParser.json()) 
app.use(cors())

const database = {
  users:[
    {
      id: '123',
      name: 'Aid',
      email: 'aid@aid.com',
      password: 'Password',
      entries: 0,
      joined: new Date(),
    },
    {
      id: '124',
      name: 'Sad',
      email: 'sad@sad.com',
      password: 'somepassword',
      entries: 0,
      joined: new Date(),
    },
  ],
  login:[]
}



const foundIdUsers = (req, res)=>{
  const { id }=req.params;
  let check = false;
  database.users.forEach(user =>{
    if (user.id === id){
      check = true;
      return res.json(user.name)
    }
  })
  if(!check){
    res.status(400).json('User dont found')
  }
}


app.get('/', (req, res)=>{
  res.send(database)
})

// signin:
app.post('/signin',  (req, res)=>{

  if(req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
    ){
      res.json('signin ok!!')
      console.log('signin ok!!',req.body.email, req.body.password);
    } else {
      console.log('signin work but bad password or login name!!', req.body);

      res.status(400).json(req.body)
    }
  })
  app.get('/signin', (req, res)=>{
    res.json("signin!!!!")
  }) 

//register
app.post('/register', (req, res)=>{
  const {email, name, password} = req.body
  bcrypt.genSalt(saltRounds, function(err, password) {
    bcrypt.hash(myPlaintextPassword, password, function(err, hash) {
      database.login.push(        {
          id: '124',
          password: password,
          email: 'sad@sad.com',
          hash: hash
        })
      console.log(hash);
        // Store hash in your password DB.
    });
  });
  database.users.push({
    id: '125',
    name: name ,
    email: email ,
    password: password,
    entries: 0,
    joined: new Date(),
  })
  res.json('register sucsess')
})

app.get('/profile/:id', (req, res)=>{
  foundIdUsers(req, res)
})

app.put('/image', (req,res)=>{
  const { id }=req.body;
  let check = false;
  database.users.forEach(user =>{
    if (user.id === id){
      check = true;
      user.entries++
      return res.json(user.entries)
    }
  })
  if(!check){
    res.status(400).json('User dont found')
  }
})





app.listen(3000,()=>{
  console.log('server work at 3000');
});
/*
/chek list for work
/ -- res - work
/signin - post = ok/fail
/register - post = user
/profile / :user ID - get -user
/image -- put - user rank
*/


