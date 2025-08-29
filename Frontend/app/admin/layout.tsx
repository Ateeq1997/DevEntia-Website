'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import ICON1 from '../../assets/admin/1.svg';
import ICON2 from '../../assets/admin/2.svg';
import ICON3 from '../../assets/admin/3.svg';
import ICON4 from '../../assets/admin/4.svg';
import ICON5 from '../../assets/admin/5.svg';
import ICON6 from '../../assets/admin/6.svg';
import LOGOUT from '../../assets/admin/logout.svg';

const navItems = [
  { label: "Dashboard", icon: ICON1, href: "/admin/dashboard" },
  { label: "Businesses", icon: ICON2, href: "/admin/businesses" },
  { label: "Manage Jobs", icon: ICON3, href: "/admin/jobs" },
  { label: "News Letters", icon: ICON4, href: "/admin/newsletters" },
  { label: "Users", icon: ICON5, href: "/admin/users" },
  { label: "Create New Job", icon: ICON6, href: "/admin/create-job" },
  { label: "Create Blog", icon: ICON6, href: "/admin/create-blog" },
  { label: "Edit Blog", icon: ICON6, href: "/admin/edit-blog" },
  { label: "Create Onboarding Article", icon: ICON6, href: "/admin/create-onboarding" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden text-black ">
      {/* Sidebar */}
      <aside
        className={`absolute lg:relative top-0 left-0 w-72 bg-white shadow px-6 py-4 lg:py-10 z-40 transform transition-transform duration-300 ease-in-out h-full overflow-y-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex justify-end lg:hidden">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-black"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-semibold text-lg uppercase">
            A
          </div>
          <div className="font-bold text-xl text-black">
            Admin
          </div>
        </div>

        <hr className="mb-8 " />
        <nav className="flex-1 flex flex-col space-y-2">
          {navItems.map(({ label, icon, href }, idx) => {
            const isActive = pathname === href || pathname.startsWith(href);
            return (
              <Link
                href={href}
                key={idx}
                className={`flex items-center gap-3 px-3 py-2 transition-all relative ${
                  isActive
                    ? "bg-gradient-to-r from-[#358E92]/20 to-[#ffffff] border-l-2 border-l-[#358E92] text-black font-medium"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-[#358E92]" />
                )}
                <Image src={icon} alt={label} width={20} height={20} />
                <span>{label}</span>
              </Link>
            );
          })}
          
        </nav>
        <div
            className="mt-10 cursor-pointer text-black flex items-center gap-2"
            onClick={() => {
              window.location.href = '/admin/login';
            }}
          >
            <Image src={LOGOUT} alt="Logout" width={20} height={20} />
            Sign out
          </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto bg-gray-100 relative">
        {/* Mobile Hamburger (scrollable and above children) */}
        <div className="lg:hidden sticky top-0 left-0 z-30 bg-gray-100 p-2">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-black"
          >
            <Menu size={24} />
          </button>
        </div>

        <div className="p-2 lg:p-6">
          {children}
        </div>
      </main>
    </div>
  );
} 