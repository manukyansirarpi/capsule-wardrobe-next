import React from "react";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import ItemModel from "./item";
const DB_URL = "mongodb+srv://manukyansirarpi1:Awsedrftgy@cluster0.mx4zzsp.mongodb.net/Capsule_Wardrobe?retryWrites=true&w=majority";


const getItems = async () => {
  
  const connection = await mongoose.connect(DB_URL).then(client => {
    console.log('listening on port 3001');
}).catch(err => {
    console.log(err);
});
 

return await ItemModel.find();
}

const Items = async () => {
  const items = await getItems();
  return (
    <div>
      <h1> {items.map(i => <p>{i.name}</p>)} </h1>
    </div>
  );
};

export default Items;
