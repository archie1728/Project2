import mongoose from 'mongoose';

   const AppointmentSchema = new mongoose.Schema({
     trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
     customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
     datetime: { type: Date, required: true },
     status: { type: String, enum: ['SCHEDULED', 'CANCELLED', 'COMPLETED'], default: 'SCHEDULED' },
   }, { timestamps: true });

   export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);