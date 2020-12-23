const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports.verify = function(req,res,next){
    const token = req.header('auth-token');
    if(!token){
        res.status(400).json({
            message:"Access Denied"
        });
    }

    try{
        const verified = jwt.verify(token,process.env.SECRET_KEY);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).json({
            message:"Invalid token"
        });
    }

}