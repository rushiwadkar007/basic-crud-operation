const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true}, (err)=>{
    if(!err){
        console.log("mongoDB connection is successful!");
    }
    else{
        console.log("Error while connecting DB", +err);
    }
});

require('./employee.model');
