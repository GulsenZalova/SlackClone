const { default: mongoose } = require("mongoose");
const Schema=mongoose.Schema


const shcema= new Schema({
    channelName:String,
    channelDescription:String,
    conservation:[
        {
            message:String,
            timeStamp:String,
            user:String,
            userİmage: String  
        }
    ],
    members:[
        {
            userName:String,
            userİmage:String
        }
    ]
})

const groupChatModel=mongoose.model("groupChatModel",shcema)

module.exports={
    groupChatModel
}