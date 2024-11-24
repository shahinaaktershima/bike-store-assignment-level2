import mongoose, { Schema, model, connect } from 'mongoose';
import { Order } from './Bikestore/bikestore.Interface';


const OrderSchema = new Schema<Order>({
    email: { type: String, required: true },
    product: {
         type:String,
        // type:.ObjectId,
        
        // ref: "Product", required: true 
        },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  });

  export const Ordermodel = model<Order>("Product", OrderSchema);