"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import { addNewUserFormControlls, initialState } from '@/utils'
import { addNewUser, editUser, getUsers } from '@/app/actions'
import { UserContext } from '@/context'
const AddNewUser = () => {
  const {currentEditedId,setCurrentEditedId,openPopUp, setOpenPopUp,addNewUserFormData, setAddNewUserFormData} = useContext(UserContext);
    function handleSaveButton(){
        return Object.keys(addNewUserFormData).every((key=>addNewUserFormData[key].trim()!==''));
    }
    const handleAddNewUserAction = async ()=>{
      if(!currentEditedId){
        const result = await addNewUser(addNewUserFormData, "/");
        console.log(result);
        setAddNewUserFormData(initialState);
        setOpenPopUp(false);
      }
      else{
        const result = await editUser(currentEditedId,addNewUserFormData,"/");
        console.log(result);
        setCurrentEditedId(null);
        setOpenPopUp(false);
        setAddNewUserFormData(initialState);
      }
    }
  return (
    <div>
        <Button onClick={()=>{setOpenPopUp(true)}}>Add New User</Button>
        <Dialog open={openPopUp} onOpenChange={()=>{
            setOpenPopUp(!openPopUp);
            setAddNewUserFormData(initialState);
            setCurrentEditedId(null);
        }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{currentEditedId ? "Edit User" : "Add New User"}</DialogTitle>

        </DialogHeader>
        <form action={handleAddNewUserAction} className="grid gap-6 py-4">
          <div className="">
            {
                addNewUserFormControlls.map((user,index)=>{
                    return(
                        <div key={user.name} className='py-3'>
                            <Label htmlFor={user.name} className="text-right">
                                   {user.label}
                            </Label>
                            <Input
                                 id={user.name}
                                 placeholder={user.placeholder}
                                 className="col-span-3"
                                 type={user.type}
                                 value={addNewUserFormData[user.name]}
                                 onChange={(e)=>{
                                    setAddNewUserFormData({
                                        ...addNewUserFormData,
                                        [user.name]: e.target.value
                                    })
                                 }}
                             />
                        </div>
                    )
                })
            }
          </div>
          <DialogFooter>
          <Button className="disabled:opacity-50" disabled={!handleSaveButton()} type="submit">Save</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default AddNewUser