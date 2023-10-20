import mongoose, { Schema } from "mongoose";

export interface IItem extends Document {
    name: string;
    description: string;
    price: number;
    imageUrl: object;
}

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

const Item: Model<IItem> = mongoose.model('Item', itemSchema);

 export default mongoose.model.Item || Item;
