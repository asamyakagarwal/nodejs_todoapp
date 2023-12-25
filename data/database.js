import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect( process.env.MONGO_URL , {
         dbName: "samyakapi",
})
.then( (c) => console.log(`database conected with ${c.connection.host}`)) 
.catch((e)=> console.log(e)) ;

} ;
