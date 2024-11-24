import mongoose, { Schema, model, connect } from 'mongoose';
import { BikeCategory, Order, Product } from './Bikestore/bikestore.Interface';

const ProductSchema = new Schema<Product>({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: Object.values(BikeCategory),
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
    createdDate: { type: Date, default: Date.now }, // Automatically sets the current date
    updatedDate: { type: Date, default: Date.now }
  }
    
);

// Middleware to update `updatedDate` on save


const OrderSchema = new Schema<Order>({
  
  email: { type: String, required: true },
  product: { type:String ,required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  createdDate: { type: Date, default: Date.now }, // Automatically sets the current date
  updatedDate: { type: Date, default: Date.now }
  
});
ProductSchema.pre("save", function (next) {
  this.updatedDate = new Date();
  next();
});

export const Ordermodel = model<Order>("Order", OrderSchema);
 export const Productmodel = model<Product>("Product", ProductSchema);
