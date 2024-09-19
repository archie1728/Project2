import dbConnect from "../../lib/mongodb";
   import Trainer from "../../models/Trainer";

   export default async function handler(req, res) {
     await dbConnect();

     if (req.method === "GET") {
       try {
         const trainers = await Trainer.find().populate("user", "name email");
         res.status(200).json(trainers);
       } catch (error) {
         res.status(400).json({ message: "Error fetching trainers" });
       }
     } else {
       res.status(405).json({ message: "Method not allowed" });
     }
   }