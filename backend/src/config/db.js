const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://youtubetest:<password>@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}