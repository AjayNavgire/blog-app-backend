const mongoose = require ( 'mongoose')
mongoose.promise = require ( 'bluebird')
let  dbUrl='mongodb+srv://ajaynawgire:Ajay0007@cluster0.cacc2.mongodb.net/socialBlogDB?retryWrites=true&w=majority' 

mongoose.connect(dbUrl)

// when we connected successfully
mongoose.connection.on('connected', function(){
    console.log(' we connected with mongoose ')

});

// when connection trow error

mongoose.connection.on('error', function(error){
console.log('mongoose connection error'+ error)
});

// when we disconnect

mongoose.connection.on('disconnected', function(){
    console.log(' mongoose connection disconnected')
});
