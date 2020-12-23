const jwt = require('jsonwebtoken');

module.exports.verify = function(req,res,next){
    const token = req.header('auth-token');
    if(!token){
        res.status(400).json({
            message:"Access Denied"
        });
    }

    try{
        const verified = jwt.verify(token,'asdsadasd');
        req.user = verified;
        next();
    }catch(err){
        res.status(400).json({
            message:"Invalid token"
        });
    }

}