import express from "express"
import Login_dat from "../data/users.js"
import jsonweb
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

    res.send(200)
})


export default router