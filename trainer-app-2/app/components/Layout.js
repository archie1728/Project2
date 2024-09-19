import Link from "next/link";
   import { useSession, signOut } from "next-auth/react";

   export default function Layout({ children }) {
     const { data: session } = useSession();

     return (
       <div>
         <nav>
           <Link href="/">Home</Link>
           {session ? (
             <>
               <Link href="/profile">Profile</Link>
               <button onClick={() => signOut()}>Sign out</button>
             </>
           ) : (
             <>
               <Link href="/login">Login</Link>
               <Link href="/signup">Sign up</Link>
             </>
           )}
         </nav>
         <main>{children}</main>
       </div>
     );
   }