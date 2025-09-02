const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    blogTitle: { type: String, required: true, trim: true },
    seoTitle: { type: String, required: true, trim: true },
    seoDescription: { type: String, required: true, trim: true },
    blogDescription: { type: String, required: true, trim: true },
    fileUrl: { type: String, required: true },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);


