'use client';

import Image from 'next/image';
import bgImg from '../../assets/images/getInTouch.webp';
import { euroStyle } from '@/utils/fonts';
import axiosInstance from '@/lib/axiosInstance';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetInTouch = () => {
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
      const response = await axiosInstance.post('/mail', messageData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Success:', response.data);
      // on success clear the form
      setMessageData({
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
  
    } catch (error: any) {
      console.error('Error:', error);
      toast.error(error.response.data.message || 'An error occurred');
      
    }
  };
  return (
    <section className="relative w-full z-0">
      <Image
        src={bgImg}
        alt="background"
        className="w-full h-full absolute -z-10"
      />
      <form
        onSubmit={handleSubmit}
        className="p-[5%] z-10 flex gap-8 flex-col md:flex-row"
      >
        <ToastContainer />

        <div className="w-full">
          <h1
            className={`font-bold text-3xl md:text-5xl lg:text-9xl tracking-wider ${euroStyle.className}`}
          >
            let’s get <br className="hidden md:block" /> in touch
          </h1>
          <p className="italic">
            <span className="text-[#ffffffd1] not-italic">Disclaimer:</span> we
            talk too much!
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start h-fit">
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full col-span-2">
            Name:
            <input
              type="text"
              name="fullName"
              value={messageData.fullName}
              onChange={handleChange}
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
            />
          </label>
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full col-span-2 md:col-span-1">
            Email:
            <input
              type="email"
              name="senderEmail"
              value={messageData.senderEmail}
              onChange={handleChange}
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
            />
          </label>
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full col-span-2 md:col-span-1">
            Subject:
            <input
              type="text"
              name="subject"
              value={messageData.subject}
              onChange={handleChange}
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
            />
          </label>
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full col-span-2 md:col-span-1">
            Phone:
            <input
              type="tel"
              name="phoneNumber"
              value={messageData.phoneNumber}
              onChange={handleChange}
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
            />
          </label>
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full">
            Message:
            <input
              type="text"
              name="message"
              value={messageData.message}
              onChange={handleChange}
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
            />
          </label>
          <button
            type="submit"
            className="bg-[#070707] px-8 py-3 font-semibold text-base w-fit col-span-1 md:col-span-2 block mx-auto"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};
export default GetInTouch;
