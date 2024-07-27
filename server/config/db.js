const mongoose = require('mongoose')

const connectDb = async() =>{
    try{
        // await mongoose.connect(process.env.MONGO_URI)
        await mongoose.connect('mongodb+srv://kraj123:kraj123@cluster0.biujkdj.mongodb.net/shop-kart?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Database connected.")

    }catch(error){
        console.log(error)
    }
}

module.exports = connectDb