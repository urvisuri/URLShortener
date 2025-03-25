const express=require('express');

const{connectToMongoDB}=require('./connect');
const urlRout=require('./routes/url');
const app=express();
const PORT=8001;

connectToMongoDB('mongodb://localhost::27017/short-url')
.then(()=>console.log("mongo db connected"))
app.use("url", urlroute);
app.listen(PORT,()=>console.log(`server started`));
