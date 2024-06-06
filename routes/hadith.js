const Hadith=require('../models/hadith')
const express=require('express')
const router=express.Router()


router.get("/",async(req,res)=>{
    try{
    const hadith=await Hadith.find()
    res.status(200).json({message:'success',hadith:hadith})
}catch(err)
{
    res.status(404).json({message:"Error in fetch"})
}
})

router.post('/insertmany', async (req, res) => {
    const data = req.body.data; // Expecting an array of objects with quote and reference fields

    if (!Array.isArray(data)) {
        return res.status(400).json({ message: 'Data should be an array' });
    }

    try {
        const result = await Hadith.insertMany(data);
        res.status(200).json({ message: 'Data Inserted', result });
    } catch (err) {
        res.status(500).json({ message: 'Error in Insert', details: err });
    }
});


module.exports=router