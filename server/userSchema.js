const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    date:{
        type: Date, 
        required: true
    },
    fullname:{
        type: String, 
        required: true
    },
    reason:{
        type: String, 
        required: true
    },
    phonenumber:{
        type: Number, 
        required: true
    },
    address:{
        type: String, 
        required: true
    },
    emailid:{
        type: String, 
        required: true
    }
})

module.exports = User = mongoose.model('user', userSchema);

