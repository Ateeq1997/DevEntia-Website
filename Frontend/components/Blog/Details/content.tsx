"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import axiosInstance from "@/lib/axiosInstance";

const Content = () => {
  const params = useParams();
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

// Replace your existing outline generation logic with this improved version

useEffect(() => {
  const fetchBlog = async () => {
    try {
      const res = await axiosInstance(`/blog/${id}`);
      if (res.status !== 200) throw new Error("Failed to fetch blog");  
      const data = await res.data;

      const parser = new DOMParser();
      const doc = parser.parseFromString(data.blogDescription, "text/html");

      // Normalize/clean invalid image sources from CMS content to avoid 400/unknown scheme
      const images = Array.from(doc.querySelectorAll('img')) as HTMLImageElement[];
      images.forEach((img) => {
        const src = img.getAttribute('src') || '';
        // Keep only absolute http/https images; remove others
        if (!/^https?:\/\//i.test(src)) {
          img.remove();
        }
      });

      // ✅ Grab all h1, h2, h3
      const allHeadings = Array.from(doc.querySelectorAll("h1, h2, h3"));

      const standaloneHeadings = allHeadings.filter((heading) => {
        const text = heading.textContent?.trim();
        if (!text) return false;

        // Exclude if inside a list
        const isInsideList = heading.closest("ul, ol, li") !== null;
        if (isInsideList) return false;

        const parent = heading.parentElement;
        if (parent && parent !== doc.body) {
          // Exclude if parent contains lists
          const siblingLists = parent.querySelectorAll("ul, ol");
          if (siblingLists.length > 0) {
            return false;
          }
        }

        return true;
      });

      const outline = standaloneHeadings
        .map((heading, index) => {
          const text = heading.textContent?.trim();
          if (!text) return null;

          // Clean ID from heading text
          const id = text
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "")
            .replace(/^-+|-+$/g, "");

          heading.id = id; // Set ID for anchor linking

          return {
            label: text,
            href: `#${id}`,
            level: heading.tagName.toLowerCase(), // "h1" | "h2" | "h3"
          };
        })
        .filter(Boolean);

      // Update the HTML with the modified h1 elements (now with IDs)
      data.blogDescription = doc.body.innerHTML;
      data.outline = outline;

      setBlog(data);
    } catch (err) {
      console.error("Error fetching blog:", err);
    } finally {
      setLoading(false);
    }
  };

  if (id) fetchBlog();
}, [id]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const res = await axiosInstance.post("/mail", { 
        email,
        senderEmail: email,
        message: "Newsletter subscription request",
        subject: "Newsletter Subscription",
        phoneNumber: "N/A",
        fullName: "Newsletter Subscriber",
        isNewsletter: true
      });
      
      if (res.status === 200) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(res.data?.message || "Subscription failed.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Subscription failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative bg-white dark:bg-black w-full max-w-[1750px] px-4 md:px-6  mx-auto  py-8 bg-black  " style={{ fontFamily: '"Bai Jamjuree", serif' }}>
      <div      
       onClick={() => router.back()}
         className="absolute left-6 w-12 h-12 flex item-center justify-center top-[-18px] z-10 bg-[#358E92] rounded-full p-4 shadow-lg lg:hidden " >
         <ArrowLeft className="w-full h-full object-cover"/>
       </div>
       <div className="flex flex-col lg:flex-row gap-8 pr-0 lg:pr-10 ">
      {/* Sidebar */}
      <div className="lg:w-1/3 hidden lg:block">
        <div className="bg-white dark:bg-black py-12 px-12 rounded-lg sticky top-24">
        <h3 className="text-lg text-black dark:text-[white] font-semibold mb-4">Share this post hello</h3>
           <div className="flex flex-row items-center gap-3 mb-6">
           <div
    onClick={() => {
      const url = `https://www.linkedin.com/company/deventia-tech-pvt-ltd/posts/?feedView=all`;
      window.open(url, "_blank", "noopener,noreferrer");
    }}
    className="w-10 h-10 flex items-center justify-center p-3 bg-[#4848FF] rounded-full cursor-pointer"
    title="Share on Twitter"
  >
    <img src="/Insights/in.svg" alt="Twitter" className="w-full h-full object-contain" />
  </div>
                <div
    onClick={() => {
      const url = `https://www.instagram.com/deventiatech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`;
      window.open(url, "_blank", "noopener,noreferrer");
    }}
    className="w-10 h-10 flex items-center justify-center p-2 bg-[#4848FF] rounded-full cursor-pointer"
    title="Open Instagram"
  >
    <img src="/Insights/insta.svg" alt="Instagram" className="w-full h-full object-contain" />
  </div>
  
{/*<div
 onClick={() =>
  toast.error("Instagram sharing is only available via mobile app.")
}    className="w-10 h-10 flex items-center justify-center p-2 bg-[#358E92] rounded-full cursor-pointer"
    title="Share on Instagram"
  >
    <img src="/Insights/insta.svg" alt="Instagram" className="w-full h-full object-contain" />
  </div> */}
  <button
  onClick={() => {
    const shareUrl = `https://www.facebook.com/profile.php?id=61555020486889`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  }}
  className="w-10 h-10 flex items-center justify-center p-2 bg-[#4848FF] rounded-full cursor-pointer transition-colors"
  title="Open Facebook"
>
  <img src="/Insights/fb.svg" alt="Facebook" className="w-full h-full object-contain" />
</button>

           </div>
             <h3 className="text-lg text-black dark:text-[#C8CFD5] font-semibold mb-4">On This Page</h3>
             <ol className="list-decimal list-outside pl-8 space-y-2 text-black dark:text-white marker:text-black dark:marker:text-white font-semibold text-[16px]">
             {blog?.outline?.length > 0 ? (
    blog.outline.map((item: any, index: number) => (
      <li key={index}>
        <a href={item.href} className="text-black dark:text-[#C8CFD5] hover:underline text-[16px]">
          {item.label}
        </a>
      </li>
    ))
  ) : (
    <li>No outline available</li>
  )}
</ol>


           <div className="flex flex-col items-start gap-3 mt-6">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-row items-center gap-3"
              >
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className="p-3 rounded-full border border-gray-400 dark:border-[#FFFFFF40] bg-transparent text-[#9995AC] outline-none flex-1 text-[12px] px-6 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={submitting}
                />
                <button
                  type="submit"
                  className="relative text-[12px] p-2 px-6 text-white bg-[#4848FF] overflow-hidden group transition-all duration-300"
                  style={{
                    boxShadow: "0 0 5px 2px #4848FF, 0 0 0 0 #fff"
                  }}
                  disabled={submitting}
                >
                  <span className="relative z-10">{submitting ? "Subscribing..." : "Subscribe"}</span>
                  <span className="absolute inset-0 bg-blue-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                </button>
              </form>
              {message && (
                <div className={`ml-2 text-xs ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {message}
                </div>
              )}
              <p className="text-[#0A0D12] text-[12px] mt-1 opacity-70">By subscribing you agree to our Privacy Policy.</p>
            </div>
            </div>
        </div>


        {/* Main Content */}
       {/* Main Content */}
<div className="lg:flex-1 lg:mt-20 mt-10">
{blog ? (
  <div className="max-w-none text-black dark:bg-black text-black dark:text-white">
    <div 
      className="blog-content-container "
      dangerouslySetInnerHTML={{ __html: blog.blogDescription }}
    />
    
    <style jsx global>{`
      /* Global styling but scoped to this specific class */
      .blog-content-container ul {
        list-style-type: disc !important;
        margin-left: 1.5rem !important;
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
        padding-left: 0 !important;
      }
      
      .blog-content-container ol {
        list-style-type: decimal !important;
        margin-left: 1.5rem !important;
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
        padding-left: 0 !important;
      }
      
      .blog-content-container ul ul {
        list-style-type: circle !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }
      
      .blog-content-container ul ul ul {
        list-style-type: square !important;
      }
      
      .blog-content-container ol ol {
        list-style-type: lower-alpha !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }
      
      .blog-content-container ol ol ol {
        list-style-type: lower-roman !important;
      }
      
      .blog-content-container li {
        margin: 0.25rem 0 !important;
        display: list-item !important;
      }
      
      .blog-content-container li p {
        margin: 0 !important;
      }
      
      .blog-content-container ul li,
      .blog-content-container ol li {
        display: list-item !important;
        margin-left: 0 !important;
        padding-left: 0 !important;
      }
      
      .blog-content-container h1 {
        font-size: 30px !important;
        font-weight: 500 !important;
        margin: 1rem 0 1rem 0 !important;
        line-height: 1.2 !important;
      }
      
      .blog-content-container h2 {
        font-size: 24px !important;
        font-weight: 500 !important;
        line-height: !important;
      }
      
      .blog-content-container h3 {
        font-size: 20px !important;
        font-weight: 500 !important;
      }
      
      .blog-content-container p {
        font-size: 16px !important;
        font-weight: 400 !important;
      }
      
      .blog-content-container p:empty {
        margin: 0.5rem 0 !important;
        height: 0.5rem !important;
      }
    `}</style>
  </div>
) : (
  <p className="text-gray-500 text-sm">Loading blog content...</p>
)}
                       
          {/* CTA Button */}
          <div className="mt-8 flex items-center justify-center lg:!justify-start">
            <Link href="/Contact-us">
              <button
                className="relative cursor-pointer bg-[#4848FF] text-sm text-white font-medium px-6 py-3  overflow-hidden group transition-all duration-300 "
                
              >
                <span className="relative z-10">Book a Demo</span>
                <span className="absolute inset-0 bg-blue-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              </button>
            </Link>
          </div>
        </div>

        <div className=" w-full lg:hidden">
        <div className="bg-white dark:bg-[black] p-6 rounded-lg">
        <h3 className="text-lg text-black dark:text-white font-semibold mb-4 text-center ">Share this post</h3>
           <div className="flex flex-row items-center justify-center gap-3 mb-6">
           <div
    onClick={() => {
      const url = `https://www.linkedin.com/company/deventia-tech-pvt-ltd/posts/?feedView=all`;
      window.open(url, "_blank", "noopener,noreferrer");
    }}
    className="w-10 h-10 flex items-center justify-center p-3 bg-[#4848FF] rounded-full cursor-pointer"
    title="Share on LinkedIn"
  >
    <img src="/Insights/in.svg" alt="LinkedIn" className="w-full h-full object-contain" />
  </div>
                <div
    onClick={() => {
      const url = `https://www.linkedin.com/company/deventia-tech-pvt-ltd/posts/?feedView=all`;
      window.open(url, "_blank", "noopener,noreferrer");
    }}
    className="w-10 h-10 flex items-center justify-center p-2 bg-[#4848FF] rounded-full cursor-pointer"
    title="Open Instagram"
  >
    <img src="/Insights/insta.svg" alt="Instagram" className="w-full h-full object-contain" />
  </div>
  
{/*<div
 onClick={() =>
  toast.error("Instagram sharing is only available via mobile app.")
}    className="w-10 h-10 flex items-center justify-center p-2 bg-[#358E92] rounded-full cursor-pointer"
    title="Share on Instagram"
  >
    <img src="/Insights/insta.svg" alt="Instagram" className="w-full h-full object-contain" />
  </div> */}
  <button
  onClick={() => {
    const shareUrl = `https://www.facebook.com/profile.php?id=61555020486889`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  }}
  className="w-10 h-10 flex items-center justify-center p-2 bg-[#4848FF] rounded-full cursor-pointer transition-colors"
  title="Open Facebook"
>
  <img src="/Insights/fb.svg" alt="Facebook" className="w-full h-full object-contain" />
</button>

           </div>
             <h3 className="text-lg text-black dark:text-[#C8CFD5] font-semibold mb-4 text-center ">On This Page</h3>
             <ol className="list-decimal list-outside pl-8 space-y-2 text-black dark:text-white marker:text-black dark:marker:text-white font-semibold">
             {blog?.outline?.length > 0 ? (
    blog.outline.map((item: any, index: number) => (
      <li key={index}>
        <a href={item.href} className="text-[#C8CFD5] hover:underline text-[16px]">
          {item.label}
        </a>
      </li>
    ))
  ) : (
    <li>No outline available</li>
  )}
</ol>


           <div className="flex flex-col items-center gap-3 mt-6">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-row items-center gap-3"
              >
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className="p-3 rounded-full border border-gray-400 dark:border-[#FFFFFF40] bg-transparent text-[#9995AC] outline-none flex-1 text-[12px] px-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={submitting}
                />
                <button
                  type="submit"
                  className="relative text-[12px] p-2 rounded- px-6 text-white bg-[#4848FF] overflow-hidden group transition-all duration-300"
                 
                  disabled={submitting}
                >
                  <span className="relative z-10">{submitting ? "Subscribing..." : "Subscribe"}</span>
                  <span className="absolute inset-0 bg-blue-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                </button>
              </form>
              {message && (
                <div className={`ml-2 text-xs ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {message}
                </div>
              )}
              <p className="text-[#0A0D12] text-[12px] mt-1 opacity-70 text-center">By subscribing you agree to our Privacy Policy.</p>
            </div>
            </div>
        </div>
      </div>
            <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
};

export default Content;
