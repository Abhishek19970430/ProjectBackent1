 import {asyncHandler} from "../utils/aysncHandler.js"

 const registerUser = asyncHandler(async(req,res,next)=>{
      res.status(200).json({
        message:"ok"
      })


 })

 export default registerUser;