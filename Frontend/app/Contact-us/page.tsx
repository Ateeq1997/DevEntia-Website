import Hero from "@/components/ContactUs/Hero";
import SendMessage from "@/components/home/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Need assistance or have questions? Contact us easily through our Contact Us page. Access our email, phone number, and office address, and let us know how we can assist you. We're here to provide support and answers to your inquiries.",
  openGraph: {
    title: "Contact Us",
    description: "Need assistance or have questions? Contact us easily through our Contact Us page. Access our email, phone number, and office address, and let us know how we can assist you. We're here to provide support and answers to your inquiries.",
    siteName: "DevEntia Tech Pvt. Ltd",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417324/getin-touch_seuzm5.jpg", 
        width: 800,
        height: 600,
        alt: "Contact Us Image", 
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


const page = () => {
  return (
    <>
      <Hero />
      <SendMessage />
    </>
  );
};
export default page;
