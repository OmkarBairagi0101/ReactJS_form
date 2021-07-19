const mongoose = require('mongoose');

const DB = 'mongodb+srv://reactjsform:reactjsform@cluster0.hahxl.mongodb.net/reactjsform?retryWrites=true&w=majority'


mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connection Successful");
}).catch((err) => console.log("error"));
