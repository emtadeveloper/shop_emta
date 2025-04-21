import mongoose from 'mongoose'

const themeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    darkMode: { type: Boolean, default: false },
    language: { type: String, enum: ['en', 'fa', 'de', 'fr'], default: 'en' },
    contrast: { type: Boolean, default: false },
    compact: { type: Boolean, default: false },
    rtl: { type: Boolean, default: false },
    color: { type: String, default: '#007bff' },
    apparent: { type: String, enum: ['light', 'dark'], default: 'light' },
    layout: { type: String, enum: ['grid', 'list'], default: 'grid' },
    integrate: { type: Boolean, default: true },
    size: { type: String, enum: ['small', 'medium', 'large'], default: 'medium' },
    font: { type: String, default: 'IranSans' },
}, { timestamps: false, versionKey: false, });

export default mongoose.model('Theme', themeSchema);
