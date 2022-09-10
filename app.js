const express =require('express');
const bodyparser = require("body-parser");
const Users_routs=require('./routes/Users')
const Cors=require('cors')
//require Controllers error
const errorPage_Controller=require('./Controllers/error')
const connectDB =require('./util/database')
const app =express();

 

//parse body 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
//enable cors
app.use(Cors())

//conect to DB
connectDB()
//User Route
app.use('/Users',Users_routs)

//handle error 
app.use(errorPage_Controller.error404)

//listen node server
app.listen(8080,()=>{
    console.log("app listen at port ",8080)
})

//  const server=http.createServer(app)
// server.listen(5000)
