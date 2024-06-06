const mongoose=require('mongoose')

const hadithSchema=mongoose.Schema({
    quote:{
        type:String,
        required:true
    },
    reference:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Hadith",hadithSchema)