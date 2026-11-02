import express from "express"
import { compliance_Loc_Check } from "../logic/compare_data.js"

const compliance_router = express.Router()

compliance_router.get('/',(req,res) =>{
    res.send(200)
})
compliance_router.post('/check', async (req,res)=>{
    const ip = req.body?.ip || req.ip
    const ip_look_up = await compliance_Loc_Check(ip)
    res.json(ip_look_up)
})

export default compliance_router