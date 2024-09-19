import dbConnect from "../../../lib/mongodb";
   import User from "../../../models/User";
   import Trainer from "../../../models/Trainer";
   import bcrypt from "bcryptjs";

   export default async function handler(req, res) {
     if (req.method === "POST") {
       await dbConnect();

       const { name, email, password, role } = req.body;
       const hashedPassword = bcrypt.hashSync(password, 10);

       try {
         const user = await User.create({ name, email, password: hashedPassword, role });

         if (role === "TRAINER") {
           await Trainer.create({ user: user._id });
         }

         res.status(201).json({ message: "User created successfully" });
       } catch (error) {
         res.status(400).json({ message: "Error creating user" });
       }
     } else {
       res.status(405).json({ message: "Method not allowed" });
     }
   }