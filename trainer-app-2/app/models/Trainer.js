import mongoose from 'mongoose';

   const TrainerSchema = new mongoose.Schema({
     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
     description: String,
     specialties: [String],
   }, { timestamps: true });

   export default mongoose.models.Trainer || mongoose.model('Trainer', TrainerSchema);