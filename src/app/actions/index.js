"use server"

import connectToDB from "@/database"
import User from "@/models/user";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function addNewUser(formData, pathToRevalidate){
    console.log("test1");
    await connectToDB();
    console.log("test2");
    try {
        const newlyCreatedUser = await User.create(formData);
        if(newlyCreatedUser){
            revalidatePath(pathToRevalidate);
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

export async function getUsers(){
    await connectToDB();
    try {
        const users= await User.find({});
        if(users){
            return {
                status: 200,
                message: "Users fetched successfully",
                success:true,
                data: users,
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
        return {
            status: 500,
            message: "Internal Server Error",
            success:false,
        }
    }
}

export async function deleteUser(id, pathToRevalidate){
    await connectToDB();
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if(deletedUser){
            revalidatePath(pathToRevalidate);
            return {
                status: 200,
                message: "User deleted successfully",
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
        return {
            status: 500,
            message: "Internal Server Error",
            success:false,
        }
    }
}