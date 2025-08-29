const Blog = require('../../Model/Blog');
const multer = require('multer');
const cloudinary = require('../../config/Cloudinary');

const storage = multer.memoryStorage();
const upload = multer({ storage });

exports.uploadMiddleware = upload.single('file');

function uploadToCloudinary(fileBuffer, folder = 'blog-files') {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: 'auto' },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );
    stream.end(fileBuffer);
  });
}

exports.createBlog = async (req, res) => {
  try {
    const { blogTitle, seoTitle, seoDescription, blogDescription, status } = req.body;

    if (!blogTitle || !seoTitle || !seoDescription || !blogDescription || !status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'File is required' });
    }

    const fileUrl = await uploadToCloudinary(req.file.buffer, 'blog-files');

    const blog = await Blog.create({
      blogTitle,
      seoTitle,
      seoDescription,
      blogDescription,
      fileUrl,
      status,
    });

    res.json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

exports.getBlogs = async (_req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (_err) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (_err) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { blogTitle, seoTitle, seoDescription, blogDescription, status, fileUrl: existingFileUrl } = req.body;

    let fileUrl = existingFileUrl || '';
    if (req.file && req.file.buffer && req.file.size > 0) {
      fileUrl = await uploadToCloudinary(req.file.buffer, 'blog-files');
    }

    const updated = await Blog.findByIdAndUpdate(
      id,
      {
        blogTitle,
        seoTitle,
        seoDescription,
        blogDescription,
        status,
        ...(fileUrl ? { fileUrl } : {}),
      },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'Blog not found' });
    res.json(updated);
  } catch (_err) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (_err) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};


