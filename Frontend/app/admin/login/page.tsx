'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axiosInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) return;

    try {
      setLoading(true);
      const res = await axiosInstance.post('/login', { email, password });
      const { token, user } = res.data || {};
      if (!token) {
        setError('Invalid server response');
        setLoading(false);
        return;
      }
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user || { email }));
      router.push('/admin/create-blog');
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Login failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className=" text-black min-h-screen w-full flex items-center justify-center">
      <div
        className="flex items-center justify-center bg-cover bg-center w-[95%] h-[700px] md:h-[800px] lg:h-[90vh] rounded-md"
        style={{ backgroundImage: "url('/Subtract (1).png')" }}
      >
        <div className="p-10 max-w-md w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md border-gray-400 outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md border-gray-400 outline-none"
                required
              />
            </div>

            {error && (
              <div className="mb-4 text-red-600 text-sm">{error}</div>
            )}

            <div className="flex items-center justify-center mt-12">
              <button
                type="submit"
                disabled={!email || !password || loading}
                className="w-[200px] bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Log in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
