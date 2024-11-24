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
        message:"Bikes retrieved successfully",
        data:result
    })
    }
    catch(err){
        // console.log(err);
        res.status(500).json({
            success:false,
            message:"could not find data",
            error:err
        })
        
    }
}
// deleteOne bike
const deleteONEbike=async(req:Request,res:Response)=>{
     
    try{
        const { productId } = req.params;
        const deletedData =await bikeServices.deleteOneProduct(productId)
        console.log(deletedData);
        
       
            res.status(200).json({
                message: "Bike deleted successfully",
                status: true,
                data:deletedData// Send deleted data if needed
                
              });
          
         
        } catch (err) {
          res.status(500).json({
            message: "An error occurred while deleting the bike",
            status: false,
            error:err
            
          });
        }
  
}
// order
// create order
const createOrderbike=async(req:Request,res:Response)=>{
    try{
        const order=req.body;
        const result= await bikeServices.createOrderBikeIntoDB(order);
        res.status(200).json({
            success:true,
            message:"order created  successfully",
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
// getallorder
const getAllOrder=async(req:Request,res:Response)=>{
    try{
        const result= await bikeServices.getAllOrderFromDB();
        res.status(200).json({
            success:true,
            message:"Order created successfully",
            data:result
        })
    } catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:err
        })
    }
}
// GEToNEorder
const getONeOrderFromDB=async(req:Request,res:Response)=>{
    try{
        const {orderId}=req.params
        const result=await bikeServices.getOneORDER(orderId)
        res.status(200).json({
            success:true,
            message:"order find successfully",
            data:result
        })
    }
    catch(err){
        // console.log(err);
        res.status(500).json({
            success:false,
            message:"could not find this data",
            error:err
        })
        
    }
}

export const bikeControllers={
    createBikeProduct,getAllBike,getSingleBike,deleteONEbike,createOrderbike,getAllOrder,getONeOrderFromDB
}