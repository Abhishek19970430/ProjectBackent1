import mongoose, {Schema} from "mongoose"
import mongooseAggregatePaginate from 
"mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile:{
            type:String, // clondanary url
            required:true,
        },
        thumbnail:{
            type:String, // clondanary url
            required:true,
        },
        title:{
            type:String, 
            required:true,
        },
        discription:{
            type:String, // clondanary url
            required:true,
        },
        duration:{
            type:String, // clondanary url
            required:true,
        },
        views: {
            type:Number,
            default:0
        },
        isPublished:{
            type:boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    },

    {
      timestamps:true
    }
)

videoSchema.plugins(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema);