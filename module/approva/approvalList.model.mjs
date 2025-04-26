import mongoose from "mongoose";

const ApprovalListSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    approvalSteps: [
        {
            role: { type: String, required: true },
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            decision: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
            comment: { type: String, trim: true },
            decidedAt: { type: Date }
        }
    ]
}, { timestamps: true });

export const ApprovalList = mongoose.model('ApprovalList', ApprovalListSchema);
