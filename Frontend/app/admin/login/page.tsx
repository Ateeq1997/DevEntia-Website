'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email || !password) return;
  
    // Simple mock login - just redirect to admin dashboard
    localStorage.setItem('token', 'mock-token');
    localStorage.setItem('user', JSON.stringify({ username: 'Admin', email }));
  
    router.push('/admin/create-blog');
  };
  
  return (
    <div className=" text-black min-h-screen w-full flex items-center justify-center">
      <div
        className="flex items-center justify-center bg-cover bg-center w-[95%] h-[700px] md:h-[800px] lg:h-[90vh] rounded-md"
        style={{ backgroundImage: "url('/Subtract (1).png')" }}
      >
        <div className="p-10 max-w-md w-full">
          {/* <div className="text-center mb-10">
            <img src="/logo.svg" alt="Logo" className="h-24 mx-auto mb-8" />
            <h2 className="text-2xl font-semibold">Sign in</h2>
          </div> */}

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

            <div className="flex items-center justify-between text-sm mb-6">
              <label className="flex items-center text-gray-400">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                Remember me
              </label>
              <a href="#" className="text-gray-400 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div className="flex items-center justify-center mt-12">
              <button
                type="submit"
                disabled={!email || !password}
                className="w-[200px] bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition cursor-pointer disabled:opacity-50"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
