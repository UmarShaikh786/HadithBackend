const express=require('express')
const app=express()
const  mongoose = require('mongoose');
const cors=require('cors')
//Set up default mongoose connection
const mongoDB = 'mongodb+srv://umarshaikh641:umar%402002@cluster0.u194zv7.mongodb.net/hadithDB?retryWrites=true&w=majority&appName=Cluster0';//@=%40
mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology:true});
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('open',()=>{console.log("Mongodb Connected")});
db.on('error', ()=>{console.log("Error in Connection")});

const port=process.env.port || 5000


// app.get("/",(req,res)=>{
//     res.send("hello umar shaikh")
// })
app.use(cors())
app.use(express.json())
const hadithRouter=require('./routes/hadith')
app.use("/hadith",hadithRouter)

app.listen(port,()=>{
    console.log("Your app is running on port 5000")
})