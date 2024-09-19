'use client';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

   export default function Signup() {
     const { register, handleSubmit } = useForm();
     const router = useRouter();

     const onSubmit = async (data) => {
       const response = await fetch("/api/auth/signup", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data),
       });

       if (response.ok) {
         router.push("/login");
       } else {
         // Handle error
       }
     };

     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("name")} placeholder="Name" required />
         <input {...register("email")} type="email" placeholder="Email" required />
         <input {...register("password")} type="password" placeholder="Password" required />
         <select {...register("role")}>
           <option value="CUSTOMER">Customer</option>
           <option value="TRAINER">Trainer</option>
         </select>
         <button type="submit">Sign Up</button>
       </form>
     );
   }