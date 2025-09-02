'use client';

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '@/lib/axiosInstance';
import { CiMail } from 'react-icons/ci';
import { MdOutlineArrowOutward, MdOutlinePhone } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { CiLocationOn } from 'react-icons/ci';


interface ContactFormData {
  fullName: string;
  message: string;
  senderEmail: string;
  phoneNumber: string;
  subject: string;
}

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    senderEmail: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/mail', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // on success clear the form
      setFormData({
        fullName: '',
        senderEmail: '',
        phoneNumber: '',
        subject: '',
        message: '',
      });

      toast.success('🎉 Thank you for contacting us! We will get back to you shortly.');
  
      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = '/';
      }, 4500);
     
    } catch (error) {
      console.error('Error:', error);
      toast.error('All fields are required.');
    }
  };

  return (
    <div className="bg-black p-8 ">
      <ToastContainer />

      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto my-8">
        <div className="  mb-16 border-gray-800 border-b pb-14">
          <h1 className="text-6xl font-bold text-white ">Let&apos;s Work</h1>
          <h2 className="text-6xl font-bold text-[#0000C8]  ">Together!</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-[#FFFFFF0D] p-5 rounded-lg mt-2">
          {/* Left Column - Contact Details */}
          <div className="space-y-4">
            <div className="bg-[#FFFFFF0D] p-6 rounded-md">
              <div className="mb-4">
                <CiMail size={28} />
              </div>
              <p className="text-gray-400">contact@deventiatech.com</p>
            </div>

            <div className="bg-[#FFFFFF0D] p-6 rounded-md">
              <div className="mb-4">
                <MdOutlinePhone size={28} />
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">(+92) 316-5910564</p>
                <p className="text-gray-400">(+92) 344 8967017</p>
              </div>
            </div>

            <div className="bg-[#FFFFFF0D] p-6 rounded-md">
              <div className="mb-4">
                <CiLocationOn size={28} />
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">
                  Office # 7, First Floor, Elanza Mall, D-Markaz, Gulberg
                  Residencia, Islamabad
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#0A0A0A] p-6 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="fullName"
                placeholder="Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-[#FFFFFF4D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-[#FFFFFF4D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="senderEmail"
                placeholder="Email"
                value={formData.senderEmail}
                onChange={handleChange}
                className="w-full bg-[#FFFFFF4D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                name="subject"
                placeholder="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#FFFFFF4D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-[#FFFFFF4D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="flex items-center gap-2 hover:bg-[#4848FF] hover:scale-110 transition-all duration-700 ease-in-out  w-full"
                >
                  <p
                    className="p-2 bg-[#4848FF] text-white flex items-center 
                 gap-2 w-full justify-center"
                  >
                    Send
                  </p>
                  <div
                    className="p-2 bg-[#4848FF] flex items-center justify-center 
                 w-auto"
                  >
                    <MdOutlineArrowOutward size={25} color="#fff" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

// 'use client';
// import React, { useState } from 'react';
// import axiosInstance from '@/lib/axiosInstance';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SendMessage = () => {
//   const [messageData, setMessageData] = useState({
//     fullName: '',
//     senderEmail: '',
//     phoneNumber: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setMessageData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       console.log(" we are in try block");
//       const response = await axiosInstance.post('/mail', messageData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log(response);

//       toast.success('Message sent successfully');
//       console.log('Success:', response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error('All fields are required.');
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <form
//         className="relative md:-top-28 bg-[#7571e6d4] p-8 mx-[5%] grid grid-cols-1 md:grid-cols-2 gap-8 py-32"
//         onSubmit={handleSubmit}
//       >
//         <label className="flex flex-col gap-4 text-lg font-semibold w-full">
//           Full Name
//           <input
//             type="text"
//             name="fullName"
//             value={messageData.fullName}
//             onChange={handleChange}
//             placeholder="Enter Your name"
//             className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
//           />
//         </label>
//         <label className="flex flex-col gap-4 text-lg font-semibold w-full">
//           Your email
//           <input
//             type="email"
//             name="senderEmail"
//             value={messageData.senderEmail}
//             onChange={handleChange}
//             placeholder="Enter Your email"
//             className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
//           />
//         </label>
//         <label className="flex flex-col gap-4 text-lg font-semibold w-full">
//           Phone number
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={messageData.phoneNumber}
//             onChange={handleChange}
//             placeholder="Enter Your phone number"
//             className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
//           />
//         </label>
//         <label className="flex flex-col gap-4 text-lg font-semibold w-full">
//           Subject
//           <input
//             type="text"
//             name="subject"
//             value={messageData.subject}
//             onChange={handleChange}
//             placeholder="Enter Your Subject"
//             className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
//           />
//         </label>
//         <label className="flex flex-col gap-4 text-lg font-semibold w-full col-span-1 md:col-span-2">
//           Write Your Message
//           <textarea
//             name="message"
//             value={messageData.message}
//             onChange={handleChange}
//             placeholder="Enter your message here"
//             className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal resize-none"
//             rows={4}
//           ></textarea>
//         </label>
//         <button
//           type="submit"
//           className="bg-[#070707] px-8 py-3 font-semibold text-base w-fit col-span-1 md:col-span-2 block mx-auto"
//         >
//           Send Message
//         </button>
//       </form>
//     </>
//   );
// };

// export default SendMessage;
