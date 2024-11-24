import { Productmodel } from "../modules/bike.product.models";
import { Product } from "../modules/Bikestore/bikestore.Interface";

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
  const result=await Productmodel.findOne({_id}).deleteOne({_id})
  // const deletedata=result?.deleteOne();
  return result ;
}
export const bikeServices={
    createBikeProductIntoDB,getAllBikeFromDB,getSingleBikeFromDB,deleteOneProduct
}