const users = require('../model/user');

module.exports.profile = async function(req,res){
    

    try{
    let findUser = await users.findOne({_id:req.user._id});


    res.send(`Hi ${findUser.name} !!!!`);

    }catch(err){
        console.log(err);
    }


}