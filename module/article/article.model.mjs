import mongoose from 'mongoose';

const ApprovalStepSchema = new mongoose.Schema({
    role: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    decision: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    comment: { type: String, trim: true },
    decidedAt: { type: Date }
}, { _id: false });

export const ApprovalProcessSchema = new mongoose.Schema({
    status: { type: String, enum: ['draft', 'pending', 'approved', 'rejected'], default: 'draft' },
    steps: { type: [ApprovalStepSchema], default: [] },
    currentStep: { type: Number, default: 0 },
    submittedAt: { type: Date },
    completedAt: { type: Date }
}, { _id: false });

const imageSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    public_id: { type: String, required: true }
});

const videoSchema = new mongoose.Schema({
    videoUrl: { type: String, required: true },
    public_id: { type: String, required: true },
    duration: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true }
});

export const ContentSchema = new mongoose.Schema({
    type: { type: String, enum: ['text', 'image', 'video'], required: true },

    content: {
        type: String,
        trim: true,
        validate: {
            validator: function (val) {
                return this.type !== 'text' || (typeof val === 'string' && val.trim().length > 0);
            },
            message: 'content field is required for text type'
        }
    },

    media: {
        type: mongoose.Schema.Types.Mixed,
        validate: {
            validator: function (val) {
                return (this.type === 'image' && val instanceof imageSchema) ||
                    (this.type === 'video' && val instanceof videoSchema);
            },
            message: 'Invalid media format'
        }
    },

    meta: {
        caption: { type: String, trim: true },
        altText: { type: String, trim: true }
    },

    order: { type: Number, index: true }
}, { timestamps: true });

export const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    excerpt: { type: String, trim: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    tags: [{ type: String, trim: true }],
    status: { type: String, enum: ['draft', 'pending', 'published', 'archived'], default: 'draft' },

    approval: {
        type: ApprovalProcessSchema,
        default: () => ({})
    },

    contents: { type: [ContentSchema], default: [] },
    featuredImage: { type: imageSchema, required: false },
    viewsCount: { type: Number, default: 0, min: 0 }
}, { timestamps: true, versionKey: false });


ArticleSchema.pre('validate', function (next) {
    if (!this.slug && this.title) {
        this.slug = this.title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-]/g, '');
    }
    next();
});

export default mongoose.model('Article', ArticleSchema);
