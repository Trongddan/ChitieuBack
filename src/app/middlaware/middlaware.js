const jwt = require("jsonwebtoken");
const middlaware = {
    verifyToken :(req,res,next)=>{
        const token = req.headers.authorization;
        const accessToken = token.split(" ")[1]
        if(token){
            jwt.verify(accessToken,"dankenvil",(err,user)=>{
                if(err){

                    res.status(403).json({mess:"mã token không hợp lệ"})
                }
                console.log(user);
                req.user = user
                next();
            })
        }else{
            res.status(401).json({mess:"Bạn không có quyền"})
        }
    },
    verifyTokenUser:(req,res,next)=>{
        middlaware.verifyToken(req,res,()=>{
            if(req.user.id === req.params.id || req.user.admin){
                next();
            }else{
                res.status(401).json({mess:"Bạn không có quyền"})
            }
        })
    }
}
module.exports = middlaware