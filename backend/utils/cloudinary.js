import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:"dxpfxypp7",
    api_key:"124616118232847",
    api_secret:"BchbjABRPRUS5rP_3jSZElgQ9Q8",
});
export default cloudinary;