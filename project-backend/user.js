const mongoose = require('mongoose')
require('dotenv').config()
const URL = process.env.MONGODB_URL


mongoose.connect(URL).then(result=>{
    console.log("connected to ",URL)
}).catch((error)=>{
    console.log("Error",error.message)
})


const userSchema = new mongoose.Schema({
    name : String,
    username : String,
    email : String,
    password : String,
    token : String,
    mailing : [{id: String, Name: String , Email : String}]
  })

  const mailingSchema = new mongoose.Schema({
    id : Number,
    username : String,
    mailingName : String,
    mailingEmail : String
  })

  const querySchema = new mongoose.Schema({
    qname : String,
    qemail : String,
    query : String
  })

  module.exports =  {
    User : mongoose.model('User',userSchema),
    Mail : mongoose.model('Mail',mailingSchema),
    Query : mongoose.model('Query',querySchema)
}