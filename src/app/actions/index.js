"use server"

import connectToDB from "@/database"
import User from "@/models/user";

export async function addNewUser(formData){
    console.log("test1");
    await connectToDB();
    console.log("test2");
    try {
        const newlyCreatedUser = await User.create(formData);
        if(newlyCreatedUser){
            return {
                status: 200,
                message: "User created successfully",
                success:true,
            }
        }
        else{
            return {
                status: 500,
                message: "Internal Server Error",
                success:false,
            }
        }
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: "Internal Server Error",
            success:false,
        }
    }
}