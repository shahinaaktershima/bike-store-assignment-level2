import { Types } from "mongoose";

// Enum for Bike Categories
 export enum BikeCategory {
    Mountain = "Mountain",
    Road = "Road",
    Hybrid = "Hybrid",
    Electric = "Electric",
  }
  
  // Product Interface
  export type Product ={
    name: string;            // The name of the bike
    brand: string;           // Manufacturer or brand of the bike
    price: number;           // Price of the bike
    category: BikeCategory;  // Type of bike (Mountain, Road, Hybrid, Electric)
    description: string;     // A brief description of the bike
    quantity: number;        // Quantity of the bike available
    inStock: boolean; 
    createdDate:  Date, // Automatically sets the current date
    updatedDate:  Date,// Indicates if the bike is in stock
  }
  
  // Order Interface
  export type Order ={
    email: string;              // Email address of the customer
    product: string;    
    quantity: number;           // The quantity of the ordered bike
    totalPrice: number;  // Total price (product price * quantity)
    createdDate:  Date, // Automatically sets the current date
    updatedDate:  Date,//       
  }