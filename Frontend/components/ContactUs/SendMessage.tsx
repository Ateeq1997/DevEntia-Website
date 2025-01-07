'use client';
import React, { useState } from 'react';
import axiosInstance from '@/lib/axiosInstance';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendMessage = () => {
  const [messageData, setMessageData] = useState({
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
    setMessageData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      console.log(" we are in try block");
      const response = await axiosInstance.post('/mail', messageData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      
      toast.success('Message sent successfully');
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
      toast.error('All fields are required.');
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        className="relative md:-top-28 bg-[#7571e6d4] p-8 mx-[5%] grid grid-cols-1 md:grid-cols-2 gap-8 py-32"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-4 text-lg font-semibold w-full">
          Full Name
          <input
            type="text"
            name="fullName"
            value={messageData.fullName}
            onChange={handleChange}
            placeholder="Enter Your name"
            className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
          />
        </label>
        <label className="flex flex-col gap-4 text-lg font-semibold w-full">
          Your email
          <input
            type="email"
            name="senderEmail"
            value={messageData.senderEmail}
            onChange={handleChange}
            placeholder="Enter Your email"
            className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
          />
        </label>
        <label className="flex flex-col gap-4 text-lg font-semibold w-full">
          Phone number
          <input
            type="tel"
            name="phoneNumber"
            value={messageData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Your phone number"
            className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
          />
        </label>
        <label className="flex flex-col gap-4 text-lg font-semibold w-full">
          Subject
          <input
            type="text"
            name="subject"
            value={messageData.subject}
            onChange={handleChange}
            placeholder="Enter Your Subject"
            className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal"
          />
        </label>
        <label className="flex flex-col gap-4 text-lg font-semibold w-full col-span-1 md:col-span-2">
          Write Your Message
          <textarea
            name="message"
            value={messageData.message}
            onChange={handleChange}
            placeholder="Enter your message here"
            className="outline-none px-4 py-3 border-[1.5px] border-[#D3D3D3] w-full text-[#797979] font-normal resize-none"
            rows={4}
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-[#070707] px-8 py-3 font-semibold text-base w-fit col-span-1 md:col-span-2 block mx-auto"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default SendMessage;
