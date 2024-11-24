
import { Ordermodel, Productmodel } from "../modules/bike.product.models";
import { Order, Product } from "../modules/Bikestore/bikestore.Interface";

const createBikeProductIntoDB=async(bike:Product)=>{
  const result=  await Productmodel.create(bike);
  return result;
}
// get products
const getAllBikeFromDB= async()=>{
    const result=await Productmodel.find();
    return result
}
// get one product by id
const getSingleBikeFromDB=async(_id:string)=>{
  const result = await Productmodel.findOne({_id})
  return result
}
// deleteone by id
const deleteOneProduct=async(_id:string)=>{
  const result=await Productmodel.findByIdAndDelete({_id})
  // const deletedata=result?.deleteOne();
  return result ;
}
// create order
const createOrderBikeIntoDB=async(order:Order)=>{
  const result=await Ordermodel.create(order);
  return result
}
// getALLorder
const getAllOrderFromDB=async()=>{
  const result=await Ordermodel.find();
  return result
}
// getoneorder by id
const getOneORDER=async(_id:string)=>{
  const result=await Ordermodel.findOne({_id});
  return result

}

export const bikeServices={
    createBikeProductIntoDB,getAllBikeFromDB,getSingleBikeFromDB,deleteOneProduct,createOrderBikeIntoDB,getAllOrderFromDB,getOneORDER
}