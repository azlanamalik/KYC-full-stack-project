import jwt from "jsonwebtoken"
export function middleware (req,res,next){
    const authorisation  = req.header[`Authorisation`]
    if (!authorisation){
        return res.status(401).json({Error:"No Authorisation Header"})
    }//dont bother even tryign to decode and waste backend resources
    const isValidJWT = jwt.decode(authorisation, process.env.JWT_SECRET_TOKEN)
    if (!isValidJWT) {
        return res.status(404).json({message: "No Authorisation"})
    }
    next()

}