const User_details=require('../Models/User');

exports.addUser=(req,res)=>{
    const name=req.body.name;
    const email=req.body.email
    const Phone=req.body.Phone
    const FavPlayer=req.body.FavPlayer

    const User=new User_details({
       name:name,
       email:email ,
       Phone:Phone,
       FavPlayer:FavPlayer
    })
    User.save()
    .then(response=>{
        res.send("user added successfully")
    })
    .catch(err=>console.log(err))
}

exports.getAllUsers=(req,res)=>{
    User_details.find()
    .then(result=>res.send(result))
    .catch(err=>console.log(err))
}

exports.getUserById=(req,res)=>{
const UserId=req.params.userId;
User_details.findById(UserId)
.then(User=>{
    res.send(User)
})
}

exports.DeleteUser=async(req,res)=>{
    const UserId=req.params.userId;

    try{
const User= await User_details.findById(UserId) ;
await User.remove()
res.send("user is deleted")

    }
    catch{
        res.send("UsEr not found")
    }
  
    }
exports.EditUser=(req,res)=>{

    const UserId=req.body.id
    const Updatedname=req.body.name;
    const Updatedemail=req.body.email
    const UpdatedPhone=req.body.Phone
    const UpdatedFavPlayer=req.body.FavPlayer;
    User_details.findById(UserId)
    .then(user=>{
        user.name=Updatedname
        user.email=Updatedemail ,
        user.Phone=UpdatedPhone,
        user.FavPlayer=UpdatedFavPlayer
        return user.save();
    })
    .then(result=>{
        res.send("User updated")
    })
}