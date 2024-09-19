import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

   export default function Login() {
     const { register, handleSubmit } = useForm();
     const router = useRouter();

     const onSubmit = async (data) => {
       const result = await signIn("credentials", {
         redirect: false,
         email: data.email,
         password: data.password,
       });

       if (result.ok) {
         router.push("/");
       } else {
         // Handle error
       }
     };

     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("email")} type="email" placeholder="Email" required />
         <input {...register("password")} type="password" placeholder="Password" required />
         <button type="submit">Login</button>
       </form>
     );
   }