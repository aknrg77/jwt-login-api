const users = require('../model/user');
const Joi = require('@hapi/joi');

const {signUpValidation,loginValidation,changePasswordValidation} = require('../validation/validation');

module.exports.validateSignup = async function(data){
    try{
        const {error} = signUpValidation(data)
        if(error!==null){
            return error.details.map((errmes)=>errmes.message.toString());
        }
        else{
            return;
        }

    }catch(err){
        console.log(err);
    }
    

}

module.exports.validateLogin = async function(data){
    try{
        const {error} = loginValidation(data)
        if(error!==null){
            return error.details.map((errmes)=>errmes.message.toString());
        }
        else{
            return;
        }

    }catch(err){
        console.log(err);
    }
    

}


module.exports.validateChangePass = async function(data){
    try{
        const {error} = changePasswordValidation(data)
        if(error!==null){
            return error.details.map((errmes)=>errmes.message.toString());
        }
        else{
            return;
        }

    }catch(err){
        console.log(err);
    }
    

}


