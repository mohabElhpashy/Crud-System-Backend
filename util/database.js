// const Sequlize =require('sequelize');
// const seqluize =new Sequlize('node-complete','root','ASTRHAyaRAB',{
//     dialect:'mysql',
//     host:'localhost'
// })
// module.exports=seqluize
const mongoose = require("mongoose");
const URL =
  // "mongodb+srv://mohab_mohamed:main_method@cluster0.icgxc.mongodb.net/test";
  "mongodb+srv://mohab:MainMethod@cluster0.cvne3el.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URL, { useUnifiedTopology: true });
  console.log("Connected is success");
};

module.exports = connectDB;
