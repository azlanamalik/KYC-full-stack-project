import express from "express"
import l

const compliance_router = express.Router()

compliance_router.get('/',(req,res) =>{
    res.send(200)
})
compliance_router.post('/check', (req,res)=>{
})

export default compliance_router