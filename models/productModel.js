import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});
const productModel = mongoose.model("products", productSchema);

export default productModel;




// import mongoose from "mongoose"
// const productSchema=mongoose.Schema({
//     name:{type:String,required:true},
//     price:{type:Number,required:true}
// })
// const productModel=mongoose.model("products",productSchema);

// const productModel=[
//     {id:1,name:"product 1",price:100},
//     {id:2,name:"product 2",price:150},
//     {id:3,name:"product 3",price:120}
// ]
// export default productModel