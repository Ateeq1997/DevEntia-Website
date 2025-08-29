'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import EDIT_ICON from '../../../assets/admin/edit.svg';
import TRASH_ICON from '../../../assets/admin/trash.svg';
import axiosInstance from '@/lib/axiosInstance';

interface Blog {
  _id: string;
  blogTitle: string;
  seoTitle: string;
  seoDescription: string;
  blogDescription: string;
  fileUrl: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

const Getblog = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showDeleteToast, setShowDeleteToast] = useState(false);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/blog');
        setBlogs(response.data);
        setError('');
      } catch (err: any) {
        console.error('Error fetching blogs:', err);
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();

    // Listen for created blog events to prepend immediately
    const handleCreated = (e: Event) => {
      const custom = e as CustomEvent<Blog>;
      const newBlog = custom.detail;
      if (!newBlog?._id) return;
      setBlogs(prev => [newBlog, ...prev]);
    };
    window.addEventListener('blog:created', handleCreated as EventListener);

    return () => {
      window.removeEventListener('blog:created', handleCreated as EventListener);
    };
  }, []);

  const handleDeleteClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleEditClick = (blog: Blog) => {
    router.push(`/admin/edit-blog/${blog._id}`);
  };

  const confirmDelete = async () => {
    if (!selectedBlog) return;
    
    try {
      await axiosInstance.delete(`/blog/${selectedBlog._id}`);
      
      // Remove the blog from the list
      setBlogs(blogs.filter(blog => blog._id !== selectedBlog._id));

      // Show delete toast
      setShowDeleteToast(true);
      setTimeout(() => setShowDeleteToast(false), 2000);
      
      setSelectedBlog(null);
      setShowModal(false);
    } catch (err: any) {
      console.error('Error deleting blog:', err);
      alert('Failed to delete blog. Please try again.');
    }
  };
  
  return (
    <div className="w-full bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Existing Blogs</h2>
      <p className="text-gray-500 mb-6">Here are your existing uploaded blogs</p>

      {showDeleteToast && (
        <div className="fixed top-1 right-6 z-50">
          <div className="px-4 py-3 bg-red-600 text-white rounded shadow-lg flex items-center gap-2">
            <span>Blog deleted successfully</span>
          </div>
        </div>
      )}
      
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#358E92]"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center py-4">
          {error}
        </div>
      )}

      {!loading && !error && blogs.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No blogs found. Create your first blog!
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {blogs.map((blog: Blog) => (
          <div
            key={blog._id}
            className="relative h-60 rounded-lg overflow-hidden shadow-md group cursor-pointer"
            style={{
              backgroundImage: `url('${blog.fileUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-b flex flex-col justify-end p-4"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #358E9200, #358E92)',
              }}
            >
             <h3 className="text-white text-[16px] font-semibold leading-tight hover:underline cursor-pointer">
               {blog.blogTitle}
             </h3>
            </div>

            {/* Status badge */}
            <div className="absolute top-2 left-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                blog.status === 'published' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-yellow-500 text-white'
              }`}>
                {blog.status}
              </span>
            </div>

            {/* Action buttons */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button 
                onClick={() => handleEditClick(blog)}
                className="bg-white p-2 rounded-lg shadow cursor-pointer"
              >
                <Image src={EDIT_ICON} alt="Edit" width={24} height={24} />
              </button>
              <button
                onClick={() => handleDeleteClick(blog)}
                className="bg-white p-2 rounded-lg shadow cursor-pointer"
              >
                <Image src={TRASH_ICON} alt="Delete" width={24} height={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Inline Modal */}
      {showModal && selectedBlog && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Are you sure you want to delete this blog?
            </h3>
            <p className="mb-6 text-gray-600 text-center">{selectedBlog.blogTitle}</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#358E92] text-white rounded cursor-pointer"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Getblog;
