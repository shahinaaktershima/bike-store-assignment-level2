import { Request, Response } from "express";
import { bikeServices } from "./bike.service";
// create bike
const createBikeProduct=async(req:Request,res:Response)=>{
    try{
        const bike=req.body;
// service function

const result=await bikeServices.createBikeProductIntoDB(bike)

// send response
res.status(200).json({
    success:true,
    message:"bike product created successfully",
    data:result


})

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:err
        })
    }
}
// get allbike
const getAllBike=async(req:Request,res:Response)=>{
    try{
        const result=await bikeServices.getAllBikeFromDB()
        res.status(200).json({
            success:true,
            message:"bike created successfully",
            data:result
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:err
        })
    }
}
// GET ONE BIKE
const getSingleBike=async(req:Request,res:Response)=>{
    try{
        const {bikeId}=req.params;
      const result= await bikeServices.getSingleBikeFromDB(bikeId)
      res.status(200).json({
        success:true,
        message:"bike find successfully",
        data:result
    })
    }
    catch(err){
        // console.log(err);
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:err
        })
        
    }
}

export const bikeControllers={
    createBikeProduct,getAllBike,getSingleBike
}