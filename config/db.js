const mongoose = require("mongoose");

const connectToDB = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("connect to database ");
    }).catch((err)=>{
        console.log("error while connect to database "+err);
    })
}

module.exports = connectToDB;