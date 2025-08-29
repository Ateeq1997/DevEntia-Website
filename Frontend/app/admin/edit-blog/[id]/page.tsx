'use client';

import { Upload } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import TextEditor from '@/components/adminDashboard/blog/TextEditor';
import axiosInstance from '@/lib/axiosInstance';

const Page = () => {
  const router = useRouter();
  const { id: blogId } = useParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState(''); 
  const [title, setTitle] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [submitting, setSubmitting] = useState<null | 'draft' | 'published'>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const [formErrors, setFormErrors] = useState({
    title: '',
    seoTitle: '',
    seoDescription: '',
    blogDescription: '',
    file: '',
  });

  // Fetch blog data when editing
  useEffect(() => {
    const fetchBlogData = async () => {
      if (blogId) {
        try {
          setLoading(true);
          const response = await axiosInstance.get(`/blog/${blogId}`);
          const blogData = response.data;
          
          setTitle(blogData.blogTitle || '');
          setSeoTitle(blogData.seoTitle || '');
          setSeoDescription(blogData.seoDescription || '');
          setBlogDescription(blogData.blogDescription || '');
          setFileUrl(blogData.fileUrl || '');
        } catch (error: any) {
          console.error('Error fetching blog data:', error);
          setError(error.response?.data?.error || 'Failed to fetch blog data');
          // Redirect back to blog list after 3 seconds
          setTimeout(() => {
            router.push('/admin/create-blog');
          }, 3000);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBlogData();
  }, [blogId]);

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFormErrors(prev => ({ ...prev, file: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent, status: 'draft' | 'published') => {
    e.preventDefault();
    setSubmitting(status);

    const errors = {
      title: '',
      seoTitle: '',
      seoDescription: '',
      blogDescription: '',
      file: '',
    };

    if (!title.trim()) errors.title = 'Blog title is required.';
    if (!seoTitle.trim()) errors.seoTitle = 'SEO title is required.';
    if (!seoDescription.trim()) errors.seoDescription = 'SEO description is required.';
    if (!blogDescription.trim()) errors.blogDescription = 'Blog content is required.';
    
    if (!blogId && !fileUrl && !file) {
      errors.file = 'Please upload a file.';
    }

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((msg) => msg);
    if (hasErrors) {
      setSubmitting(null);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('blogTitle', title);
      formData.append('seoTitle', seoTitle);
      formData.append('seoDescription', seoDescription);
      formData.append('blogDescription', blogDescription);
      formData.append('status', status);
      
      if (file) {
        formData.append('file', file);
      }

      if (blogId) {
        // Update existing blog
        await axiosInstance.put(`/blog/${blogId}`, formData);
      } else {
        // Create new blog
        await axiosInstance.post('/blog', formData);
      }

      setShowSuccess(true);
      setToastMessage(blogId ? 'Blog updated successfully!' : 'Blog created successfully!');
      setSubmitting(null);

      // Auto hide toast after 2.5s
      setTimeout(() => {
        setShowSuccess(false);
        setToastMessage('');
      }, 2500);
      
      // Reset form after 2 seconds if creating new
      if (!blogId) {
        setTimeout(() => {
          setTitle('');
          setSeoTitle('');
          setSeoDescription('');
          setBlogDescription('');
          setFile(null);
          setFileUrl('');
          setFormErrors({
            title: '',
            seoTitle: '',
            seoDescription: '',
            blogDescription: '',
            file: '',
          });
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        }, 2000);
      } else {
        // After successful update, navigate back to create-blog list
        setTimeout(() => {
          router.push('/admin/create-blog');
        }, 1500);
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      setSubmitting(null);
      // Handle error - show error message to user
    }
  };

  return (
    <div className="w-full bg-white py-14 px-6 lg:px-8 lg:py-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-black mb-6">
        {blogId ? 'Edit Blog' : 'Add a New Blog'}
      </h2>

      {loading && (
        <div className="mb-6 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          Loading blog data...
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error} - Redirecting back to blog list...
        </div>
      )}

      {showSuccess && (
        <div className="fixed top-1 right-6 z-50">
          <div className="px-4 py-3 bg-green-600 text-white rounded shadow-lg flex items-center gap-2">
            <span>{toastMessage || 'Success'}</span>
          </div>
        </div>
      )}

      <form className="space-y-6">
        <div className="flex gap-5">
          <div className="w-full">
            <label className="block text-black font-medium mb-2">Blog Title *</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Add a Blog Title"
              className="w-full px-4 py-2 border border-gray-400 rounded-md outline-none focus:border-blue-500"
            />
            {formErrors.title && <p className="text-sm text-red-500 mt-1">{formErrors.title}</p>}
          </div>
          <div className="w-full">
            <label className="block text-black font-medium mb-2">SEO Title *</label>
            <input
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              type="text"
              placeholder="Add a SEO Title"
              className="w-full px-4 py-2 border border-gray-400 rounded-md outline-none focus:border-blue-500"
            />
            {formErrors.seoTitle && <p className="text-sm text-red-500 mt-1">{formErrors.seoTitle}</p>}
          </div>
        </div>

        <div>
          <label className="block text-black font-medium mb-2">SEO Description *</label>
          <textarea
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-400 rounded-md outline-none focus:border-blue-500"
            placeholder="Add SEO Description"
          />
          {formErrors.seoDescription && <p className="text-sm text-red-500 mt-1">{formErrors.seoDescription}</p>}
        </div>

        <div>
          <label className="block text-black font-medium mb-2">Blog Description *</label>
          <TextEditor value={blogDescription} onChange={setBlogDescription} />
          {formErrors.blogDescription && <p className="text-sm text-red-500 mt-1">{formErrors.blogDescription}</p>}
        </div>

        <div>
          <label className="block text-black font-medium mb-2">
            File {!blogId && !fileUrl ? '*' : '(Optional)'}
          </label>
          <div
            onClick={handleUploadClick}
            className="p-8 w-full border border-gray-400 text-gray-400 rounded-md flex flex-col gap-2 items-center justify-center cursor-pointer hover:border-black transition"
          >
            <p className="text-black">Upload</p>
            <Upload size={32} className="text-gray-500" />
            <p className="text-xs">Drag & Drop files or click to browse</p>
            <p className="text-xs">Supported: JPEG, PNG, GIF, MP4, PDF, Word, PPT</p>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.gif,.mp4,.pdf,.doc,.docx,.ppt,.pptx"
              className="hidden"
            />
          </div>
          {formErrors.file && <p className="text-sm text-red-500 mt-1">{formErrors.file}</p>}
        </div>

        {file ? (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-700">
              <strong>New file selected:</strong> {file.name}
            </p>
          </div>
        ) : fileUrl ? (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700">
              <strong>Current file:</strong>{' '}
              <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                View File
              </a>
            </p>
          </div>
        ) : null}

        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="border cursor-pointer border-gray-400 text-black px-10 py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitting !== null}
            onClick={(e) => handleSubmit(e, 'draft')}
          >
            {submitting === 'draft' ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Saving...</span>
              </>
            ) : (
              'Save as Draft'
            )}
          </button>

          <button
            type="button"
            className="bg-[#FDB022] cursor-pointer text-black px-10 py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#fda500] transition"
            disabled={submitting !== null}
            onClick={(e) => handleSubmit(e, 'published')}
          >
            {submitting === 'published' ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Publishing...</span>
              </>
            ) : (
              'Publish'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;