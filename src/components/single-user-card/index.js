"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '../ui/button'
import { deleteUser } from '@/app/actions'
  
const SingleUserCard = ({item}) => {

    async function handleDelete(id){
        const result = await deleteUser(id,"/");
        console.log(result?.success);
    }
  return (
    <div className=''>
        <Card className="shadow-lg">
  <CardHeader>
    <CardTitle>{item?.firstName} {item?.lastName}</CardTitle>
    <CardDescription>{item?.email}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{item?.address}</p>
  </CardContent>
  <CardFooter className="flex justify-between mx-auto items-center">
  <Button>Edit</Button>
  <Button onClick={()=>{handleDelete(item?._id)}}>Delete</Button>
  </CardFooter>
</Card>

    </div>
  )
}

export default SingleUserCard