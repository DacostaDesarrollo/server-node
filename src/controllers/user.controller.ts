import { Response,Request } from "express";

export class UserController {
    public getUser(req:Request , res:Response){
        res.status(200).json({
            message:"Hello User"
        })
    }
}