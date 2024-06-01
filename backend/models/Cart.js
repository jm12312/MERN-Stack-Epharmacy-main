const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    oc: [{
        pid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product", 
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        }
    }],
    userId:{
        type:String,
        required:true,  
    },
}, { timestamps: true });

module.exports = mongoose.model("Cart", CartSchema);
