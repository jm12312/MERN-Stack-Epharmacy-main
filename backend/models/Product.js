const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        default:100,
    },
    image:{
        type:String,
        required:false,        
    },
    reviews:{
        type:Number,
        required:false,        
    },
    rating:{
        type:Number,
        required:false,    
    }
    
},{timestamps:true})

module.exports=mongoose.model("Product",ProductSchema)

