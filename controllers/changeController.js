const users = require('../model/user');
const {validateChangePass} = require('../middlewares/validate');
const bcrypt = require('bcrypt');


module.exports.change = async function(req,res){

    try{
        const error = await validateChangePass(req.body);
        if(error){
            return res.status(400).json({
                message:error
            })
        }else{
            let user = await users.findOne({email : req.body.email});
            if(!user) {
                res.status(400).json({
                message:"Email/password wrong"
                })
            }

            const validPassword = await bcrypt.compare(req.body.password,user.password);
            if(!validPassword){
                return res.status(400).json({
                    message:"Email/password wrong"
                })
            }else{
                newPassword = req.body.newPassword;
                confirmPassword = req.body.confirmPassword;

                if(newPassword !=confirmPassword){
                    return res.status(400).json({
                        message:"Password does not match"
                    })
                }else{
                    const salt = await bcrypt.genSalt(10);
                    const hashedpassword = await bcrypt.hash(newPassword,salt);

                    await users.updateOne({email : req.body.email},{password : hashedpassword});
                    
                    return res.status(200).json({
                        message:"Password change successful"
                    });
                }


            }


        }


    }catch(err){



    }






}