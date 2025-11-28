import mongoose, {Schema} from "mongoose";
import jwt from "jasonwebToken"
import bcript from bcript

const userSchema = new Schema(
    {
        username: {
            type:String,
            required:true,
            unique: true,
            lowercase: true,
            trim:true,
            index: true
        },

        email: {
            type:String,
            required:true,
            unique: true,
            lowercase: true,
            trim:true,
        },
        fullName: {
            type:String,
            required:true,
            trim:true,
            index: true
        },

        avtar: {
            type:String,// claudinary url
            required:true,
        },
        coverImage:{
            type:String, // claudinary URL
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password: {
            type:String,
            required:[true,'Password is required']

        },

        refreshToken:{
            type:String
        }

        
    },
    {
      timestamps:true  
    }
);
//pre hook is an middleware which run just before saving our data 
// for encrypting password
userSchema.pre("save", async function (next){
    if(!isModified("password"))return next();
    this.password = bcript.hash(this.password, 10)
    next();
} )
//bcript.compare compare two passord and return true or false
userSchema.methods.isPasswordCorrect= async function
(password){
    return await bcript.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )

}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
           
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )

}

export const User = mongoose.model("User",userSchema);


