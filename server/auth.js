const express = require('express');
const router = express.Router();

require('./conn');
const User = require("./userSchema");

router.get('/', (req, res) => {
    res.send(`Hello world from server`);
});

router.post('/register', (req,res)=>{

    const {date, fullname, reason, phonenumber, address, emailid} = req.body;

    if(!date || !fullname || !reason || !phonenumber || !address || !emailid){
        return res.status(422).json({error:"Please fill all the fields correct"});
    }

    User.findOne({emailid:emailid}).then((userExists) => {
        if(userExists){
            return res.status(422).json({error: "Email already exist"});
        }

        const user = new User({date, fullname, reason, phonenumber, address, emailid});

        user.save().then(() => {
            res.status(201).json({message: "User registered Successfully"});
        }).catch((err) => res.status(500).json({error: "Failed to register"}));
    }).catch(err => {console.log(err);});
});


// router.post('/register', async, (req,res)=>{

//     const {date, fullname, reason, phonenumber, address, emailid} = req.body;

//     if(!date || !fullname || !reason || !phonenumber || !address || !emailid){
//         return res.status(422).json({error:"Please fill all the fields correct"});
//     }

//     try{
//         const userExists = await User.findOne({emailid:emailid});
        
//         if(userExists){
//             return res.status(422).json({error: "Email already exist"});
//         }

//         const user = new User({date, fullname, reason, phonenumber, address, emailid});

//         await user.save(); 
        
//         res.status(201).json({message: "User registered Successfully"});
//     }
//     catch(err){
//         console.log(err);
//     }
// });


module.exports = router;