import mongoose from "mongoose";
const dbConnect= async ()=>{
    try{
 await mongoose.connect(process.env.MONGO_URI);

    }catch(err){
        console.log(err)
    }
};

export default dbConnect;



// db.products.insertMany([{name:"Product 2",price:220,desc:"This is product 2",imageUrl:"/images/2.png"},
//     {name:"Product 3",price:260,desc:"This is product 3",imageUrl:"/images/3.png"},
//     {name:"Product 4",price:300,desc:"This is product 4",imageUrl:"/images/4.png"},
//     {name:"Product 5",price:320,desc:"This is product 5",imageUrl:"/images/5.png"},
//     {name:"Product 6",price:340,desc:"This is product 6",imageUrl:"/images/6.png"},
//     {name:"Product 7",price:380,desc:"This is product 7",imageUrl:"/images/7.png"},
//     {name:"Product 8",price:400,desc:"This is product 8",imageUrl:"/images/8.png"},
    
// ])