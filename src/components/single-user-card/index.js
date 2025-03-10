"use client"
import React, { useContext } from 'react'
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
import { UserContext } from '@/context'
  
const SingleUserCard = ({item}) => {
  const {currentEditedId,setCurrentEditedId,openPopUp, setOpenPopUp,addNewUserFormData, setAddNewUserFormData} = useContext(UserContext);
  function handleEdit(item){
    setCurrentEditedId(item?._id);
    setOpenPopUp(true);
    setAddNewUserFormData({
      firstName: item?.firstName,
      lastName: item?.lastName,
      address: item?.address,
      email: item?.email,
    });
  }  
  async function handleDelete(id){
        const result = await deleteUser(id,"/");
        // const res=result.json();
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
  <Button onClick={()=>handleEdit(item)}>Edit</Button>
  <Button onClick={()=>{handleDelete(item?._id)}}>Delete</Button>
  </CardFooter>
</Card>

    </div>
  )
}

export default SingleUserCard