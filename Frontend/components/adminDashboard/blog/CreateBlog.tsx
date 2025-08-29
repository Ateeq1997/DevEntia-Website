'use client';
import { Upload } from "lucide-react";
import { useRef, useState } from "react";
import TextEditor from "./TextEditor";
import axiosInstance from "@/lib/axiosInstance";

// Toast component
const Toast = ({ message, type, isVisible, onClose }: { 
  message: string; 
  type: 'success' | 'error'; 
  isVisible: boolean; 
  onClose: () => void; 
}) => {
  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-purple-500' : 'bg-red-500';
  const icon = type === 'success' ? '✓' : '✕';

  return (
    <div className={`fixed top-4 right-4 z-50 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px] animate-slide-in`}>
      <span className="text-xl font-bold">{icon}</span>
      <span className="flex-1">{message}</span>
      <button 
        onClick={onClose}
        className="text-white hover:text-gray-200 text-xl font-bold"
      >
        ×
      </button>
    </div>
  );
};

const Createblog = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState<null | 'draft' | 'published'>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false
  });
  const [formErrors, setFormErrors] = useState({
    title: '',
    seoTitle: '',
    seoDescription: '',
    blogDescription: '',
    file: '',
  });

  
  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile(selectedFile);
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 4000);
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handleSubmit = async (e: React.FormEvent, status: 'draft' | 'published') => {
    e.preventDefault();
    setSubmitting(status);
  
    const errors: typeof formErrors = {
      title: '',
      seoTitle: '',
      seoDescription: '',
      blogDescription: '',
      file: '',
    };

    if (!title.trim()) errors.title = "Blog title is required.";
    if (!seoTitle.trim()) errors.seoTitle = "SEO title is required.";
    if (!seoDescription.trim()) errors.seoDescription = "SEO description is required.";
    if (!blogDescription.trim()) errors.blogDescription = "Blog content is required.";
    if (!file) errors.file = "Please upload a file.";

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some(msg => msg);
    if (hasErrors) {
      setSubmitting(null);
      return;
    }

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('blogTitle', title);
      formData.append('seoTitle', seoTitle);
      formData.append('seoDescription', seoDescription);
      formData.append('blogDescription', blogDescription);
      formData.append('status', status);
      if (file) {
        formData.append('file', file);
      }

      // Make API call
      const response = await axiosInstance.post('/blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setSubmitting(null);
        showToast(`Blog ${status === 'draft' ? 'saved as draft' : 'published'} successfully!`, 'success');
        
        // Notify other components (e.g., Blog list) immediately
        try {
          const createdBlog = response.data?.blog;
          if (createdBlog) {
            window.dispatchEvent(new CustomEvent('blog:created', { detail: createdBlog }));
          }
        } catch {}
        
        // Reset form
        setFile(null);
        setTitle('');
        setSeoTitle('');
        setSeoDescription('');
        setBlogDescription('');
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
      }
    } catch (error: any) {
      console.error('Error creating blog:', error);
      setSubmitting(null);
      showToast('Failed to create blog. Please try again.', 'error');
    }
  };

  return (
    <div className="w-full bg-white py-14 px-6 lg:px-8 lg:py-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-black mb-6">Add a New Blog</h2>

      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />

      <form className="space-y-6" >
        <div className="flex gap-5">
          <div className="w-full">
            <label className="block text-black font-medium mb-2">Blog Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Add a Blog Title"
              className="w-full px-4 py-2 border border-gray-400 rounded-md outline-none"
            />
            {formErrors.title && <p className="text-sm text-red-500 mt-1">{formErrors.title}</p>}
          </div>
          <div className="w-full">
            <label className="block text-black font-medium mb-2">SEO Title</label>
            <input
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              type="text"
              placeholder="Add a SEO Title"
              className="w-full px-4 py-2 border border-gray-400 rounded-md outline-none"
            />
            {formErrors.seoTitle && <p className="text-sm text-red-500 mt-1">{formErrors.seoTitle}</p>}
          </div>
        </div>

        <div>
          <label className="block text-black font-medium mb-2">SEO Description</label>
          <textarea
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-400 rounded-md outline-none"
            placeholder="Add SEO Description"
          />
          {formErrors.seoDescription && <p className="text-sm text-red-500 mt-1">{formErrors.seoDescription}</p>}
        </div>

        <div>
          <label className="block text-black font-medium mb-2">Blog Description</label>
          <TextEditor value={blogDescription} onChange={setBlogDescription} />
{formErrors.blogDescription && (
  <p className="text-sm text-red-500 mt-1">{formErrors.blogDescription}</p>
)}
        </div>

        <div
          onClick={handleUploadClick}
          className="p-8 w-full border border-gray-400 text-gray-400 rounded-md flex flex-col gap-2 items-center justify-center cursor-pointer hover:border-black transition"
        >
          <p className="text-black">Upload</p>
          <Upload size={32} className=" text-gray-500" />
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

        {file && (
          <p className="text-sm text-black">
            Selected file: <strong>{file.name}</strong>
          </p>
        )}

        <div className="flex justify-end gap-3">
         
        <button
  type="button"
  className="border cursor-pointer border-gray-400 text-black px-10 py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-60"
  disabled={submitting === 'draft'}
  onClick={(e) => handleSubmit(e, 'draft')}
>
  {submitting === 'draft' &&
  title.trim() &&
  seoTitle.trim() &&
  seoDescription.trim() &&
  blogDescription.trim() &&
  file ? (
    <>
      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      <span>Saving Draft...</span>
    </>
  ) : (
    "Draft"
  )}
</button>

<button
  type="button"
  className="bg-[#FDB022] cursor-pointer text-black px-10 py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-60"
  disabled={submitting === 'published'}
  onClick={(e) => handleSubmit(e, 'published')}
>
  {submitting === 'published' &&
  title.trim() &&
  seoTitle.trim() &&
  seoDescription.trim() &&
  blogDescription.trim() &&
  file ? (
    <>
      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      <span>Publishing...</span>
    </>
  ) : (
    "Publish"
  )}
</button>

        </div>
      </form>
    </div>
  );
};

export default Createblog;
