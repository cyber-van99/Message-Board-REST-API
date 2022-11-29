const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/toDOLIST").then(() => {
  console.log(`Database Connected Successfully`);
}).catch((err)=>{
    console.log(`Unable to connect ${err}`);
})


