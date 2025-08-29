const express = require('express');
const {
  uploadMiddleware,
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controller/createBlog/createBlogController');

const router = express.Router();

// Create
router.post('/blog', uploadMiddleware, createBlog);

// List
router.get('/blog', getBlogs);

// Read single
router.get('/blog/:id', getBlogById);

// Update
router.put('/blog/:id', uploadMiddleware, updateBlog);

// Delete
router.delete('/blog/:id', deleteBlog);

module.exports = router;


