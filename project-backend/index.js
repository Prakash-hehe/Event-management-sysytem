const express = require('express');
const jwt = require('jsonwebtoken')
const Users = require('./user')
const User = Users.User
const Mail = Users.Mail
const Query = Users.Query
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.post('/queries',(req,res)=>{
  const newquery = new Query({
    qname : req.body.qname,
    qemail : req.body.qemail,
    query : req.body.query
  })

  newquery.save().then(savedQuery=>{
    res.json(savedQuery)
  }).catch(error=> console.log(error))

})

app.get('/login', (req, res) => {
  User.find({}).then(result=>{
    res.json(result)
  })
  });

app.post('/new-login',(req,res)=>{
    const body= req.body
    const newToken = jwt.sign(req.body,'ABCXYZ')
   
    const user= new User({
    name : body.name,
    username : body.username,
    email : body.email,
    password :body.password,
    token : newToken,
    mailing : []
})

    user.save().then(savedUser=>{
      res.json(savedUser)
    }).catch(error=> console.log(error))
});

app.get('/users', (req, res) => {
  User.find({}).then(result=>{
    res.json(result)
  })
});

app.put('/mailing',(req,res)=>{
  const user = req.body
  User.findByIdAndUpdate(user.id,user, { new: true }).then(result=>{
    res.send(user.mailing)
  })
})

app.post('/mailing',(req,res)=>{
  const mail = new Mail ({
    id : req.body.id,
    username : req.body.username,
    mailingName : req.body.mailingName,
    mailingEmail : req.body.mailingEmail
  })

  mail.save().then(savedMail=>{
    res.json(savedMail)
  }).catch(error=> console.log(error))

})

app.get('/mailing',(req,res)=>{
  Mail.find({}).then(result=>{
     res.json(result)
  })
})

  app.listen(3001, () => console.log('Server is running on http://localhost:3001'));