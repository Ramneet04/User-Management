import AddNewUser from "@/components/add-new-user";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-[80%] mx-auto flex justify-between mt-20">
        <h1>User Management System</h1>
        <AddNewUser/>
      </div>
    </main>
  );
}