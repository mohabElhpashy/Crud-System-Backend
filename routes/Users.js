 const express=require("express");
 const Router=express.Router();
 const getroute=require('../Controllers/User')
Router.post('/addUser',getroute.addUser);
Router.get('/all_Users',getroute.getAllUsers)
Router.get('/:userId',getroute.getUserById)
Router.post('/Edit',getroute.EditUser)
Router.delete('/delete/:userId',getroute.DeleteUser)



 module.exports=Router