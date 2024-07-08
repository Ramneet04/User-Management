import AddNewUser from "@/components/add-new-user";
import { getUsers } from "./actions";
import SingleUserCard from "@/components/single-user-card";

export default async function Home() {
    const result = await getUsers();
  return (
    <main className="w-full">
      <div className="w-[80%] mx-auto flex justify-between mt-20">
        <h1>User Management System</h1>
        <AddNewUser/>
      </div>
      <div className=" mt-8 w-[70%] mx-auto grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8">
        {
          result && result?.data && result?.data.length>0 ? 
          result?.data.map((item, index) => (
            <div key={index}>
              <SingleUserCard item={item}/>
            </div>
          )) : <div>No Users Found</div>
        }
      </div>
    </main>
  );
}