const jwt = require("jsonwebtoken");
const SECRET_KEY = "SHOPAPPKEY";

const auth = (req, res, next)=>{

    try {

        let token = req.body.token;
        if(token){
           // token = token.split(" ")[1];
          //  let user = jwt.verify(token, SECRET_KEY );
           // req.userId = user.id;

            jwt.verify(token,SECRET_KEY,(err,data)=>{
                if(err)
                {
                    res.status(401).json({
                        message:'session expired.',
                    })
                }
                req.user = data;
            });
        }
        else{
            return res.status(401).json({message: "Unauthorized User"});
        }

        next();
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Unauthorized User"});
    }

}

module.exports = auth;