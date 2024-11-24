import mongoose, { Schema, model, connect } from 'mongoose';
import { BikeCategory, Product } from './Bikestore/bikestore.Interface';

const ProductSchema: Schema<Product> = new Schema<Product>({
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
  },
    
);

// Middleware to update `updatedDate` on save
ProductSchema.pre("save", function (next) {
  this.updatedDate = new Date();
  next();
});
 export const Productmodel = model<Product>("Product", ProductSchema);
