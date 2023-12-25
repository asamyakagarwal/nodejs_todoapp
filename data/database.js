import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect( process.env.MONGO_URL , {
         dbName: "samyakapi",
})
.then( () => console.log("database conected")) 
.catch((e)=> console.log(e)) ;

} ;
