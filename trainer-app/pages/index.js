import { useSession } from "next-auth/react";
   import Link from "next/link";

   export default function Home() {
     const { data: session } = useSession();

     return (
       <div>
         <h1>Welcome to Trainer App</h1>
         {session ? (
           <p>Welcome, {session.user.email}</p>
         ) : (
           <div>
             <Link href="/login">Login</Link>
             <Link href="/signup">Sign Up</Link>
           </div>
         )}
       </div>
     );
   }