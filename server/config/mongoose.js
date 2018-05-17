const mongoose =  require("mongoose");

module.exports = ()=>{
    mongoose.connect('mongodb://localhost/BeltExam');
    mongoose.Promise = global.Promise;
}