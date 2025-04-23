import mongoose from 'mongoose';

const iconSchema = new mongoose.Schema({
    imageUrl: String,
    public_id: String,
}, { _id: false });

const filterSubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        enum: ['radio', 'selectbox'],
        required: true,
    },
    options: {
        type: [String],
        default: [],
        validate: {
            validator: (opts) => Array.isArray(opts),
            message: 'options باید آرایه باشد'
        },
    },
    min: { type: Number },
    max: { type: Number },
}, { _id: false });

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null,
    },
    description: {
        type: String,
        trim: true,
    },
    icon: {
        type: iconSchema,
        default: null
    },
    filters: {
        type: [filterSubSchema],
        default: [],
    },
}, {
    timestamps: true,
});

categorySchema.virtual('subCategories', {
    ref: 'Category',
    localField: '_id',
    foreignField: 'parent',
});

export default mongoose.model('Category', categorySchema);
