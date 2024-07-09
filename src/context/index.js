import { initialState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserState({children}){
    const [openPopUp, setOpenPopUp] = useState(false);
    const [addNewUserFormData, setAddNewUserFormData] = useState(initialState);
    const [currentEditedId, setCurrentEditedId] = useState(null);
    return <UserContext.Provider value={{currentEditedId,setCurrentEditedId,openPopUp, setOpenPopUp,addNewUserFormData, setAddNewUserFormData}}>{children}</UserContext.Provider>
}