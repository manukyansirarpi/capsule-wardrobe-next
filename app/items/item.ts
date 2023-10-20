const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    description: {
        type: String,
    },  
    price: {                    
        type: Number,
    },
    imageUrl: { 
        type: Object,
    },
}, { timestamps: true});


 export default  mongoose.models.Item || mongoose.model('Item', itemSchema);

// Path: capsule-wardrobe-node/routes/items.ts