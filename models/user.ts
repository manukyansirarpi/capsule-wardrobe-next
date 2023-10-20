import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema({
    name: { 
        type: String,
         required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true
    },
},
{ timestamps: true});

export default mongoose.models.User || mongoose.model('User', userSchema);
