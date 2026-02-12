const {connectDB,sequelize} = require('./connection')
const {User}= require('./models/comment.model')
const {Post}= require('./models/post.model')
const {Comment} = require('./models/user.model')

module.exports ={connectDB,sequelize,User,Post,Comment} 