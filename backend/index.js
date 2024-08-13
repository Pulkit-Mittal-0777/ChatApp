const express=require('express');

const { app, server } =require("./SocketIO/server.js");
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const cookie_parser=require('cookie-parser')
dotenv.config();
const URI=process.env.MONGODB_URI;
// console.log(URI);
const userRoute=require('./routes/userRoute');
const messageRoute=require('./routes/messageRoute');
try{
    mongoose.connect(URI)
    console.log('db connected successfully')
    
}
catch(e){
    console.log(e);
}
app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:5173', // Your frontend URL
//     credentials: true, // Allow cookies and credentials to be sent
// }));
app.use(cors());
app.use(cookie_parser());
app.use(userRoute);

app.use(messageRoute);

const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})
