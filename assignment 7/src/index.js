const express = require('express')
const port = 3000;
const {connectDB ,User, sequelize} = require('./DB');
const { userRouter,postRouter } = require('./src/modules');
const app = express() 
connectDB();
app.use(express.json())  
 sequelize.sync({alter:true})
 User.create({name:"abdo",email:'abdo@g.com',password:"235865"})

app.use('/user',userRouter)
app.use('/Post',postRouter)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
}) 