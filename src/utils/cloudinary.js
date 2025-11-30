import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

const uploadOnCloudinaty= async(localFilePath)=>{

    try {
        if(!localFilePath) return null
        // if localPath found
        const response = await cloudinary.uploader
       .upload(
           'localFilePath', {
              resource_type:"auto"
           }
       )
       // file has been Uploaded successfully
      console.log("File Successfully Uploaded on cloudinary",response.url);

      return response;


    } catch (error) {
        // agar file upload nahi hui to agar upload nahi hue to 
        // apni file ko local server se remove karna hoga taki unUsed 
        // file Dete ho jaye

        fs.unlinkSync(localFilePath)// remove the locally saved temporarily saved file
        return null;

    }

}

export default {uploadOnCloudinaty};