const jwt=require('jsonwebtoken');
const User=require('../Models/userSchema');

const Authentcate = async (req,res,next) =>{
    try{
        const token=req.cookies.jwtoken;
        const verify = jwt.verify(token,process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verify._id,"tokens.token":token})

        if(!rootUser)
        {
            throw new Error('User not found');
        }

        req.token=token;
        req.rootUser=rootUser;
        req.userId=rootUser._id;
        
        next();

    }catch(err){
        res.status(401).send('Unauthorized:No token provided');
        console.log(err);
    }
}

module.exports = Authentcate;