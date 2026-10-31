import express from "express"
import Login_dat from "../data/users.js"
import jwt from "jsonwebtoken"
// "/auth route"
const router = express.Router()

router.get("/", (req,res) => {
    res.status(200).json({"message" : "fetched correctly"})
})

router.post("/login" , (req,res) => {

    const {email , password} = req.body
    if (!email || !password){
        return res.status(400).json({message : `send in ${(!email) ? "username" : "password"}`})
    }
    if(email ==! /^[^\s@]+@[^\s@]+\.[^\s@]+$/){
        return res.status(400).json({message : "invalid format for email lol"})
    }
    const password_on_db = Login_dat.get(email)
    if(!password_on_db){
        return res.status(400).json({"message" : "incorrect password"})
    }
    //now we done checks we can create a JWT :)
    //i see an issue here where we should rotate the jwt_secret_key each time server restarts to allow all users to reset incase of a overload
    const jwtToken = jwt.sign({email} , process.env.JWT_SECRET_KEY , { expiresIn: "1h" })
    res.status(202).json({token: jwtToken})
})


export default router