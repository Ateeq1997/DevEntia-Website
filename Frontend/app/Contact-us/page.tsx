import Hero from "@/components/ContactUs/Hero";
import SendMessage from "@/components/home/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact DevEntia Tech - Get Your Free IT Consultation Today",
  description:
    "Ready to start your project? Contact DevEntia Tech for a free consultation. Email, call, or visit us in Islamabad. Get custom software quotes within 24 hours.",
  openGraph: {
    title: "Contact DevEntia Tech - Get Your Free IT Consultation Today",
    description:
      "Ready to start your project? Contact DevEntia Tech for a free consultation. Email, call, or visit us in Islamabad. Get custom software quotes within 24 hours.",
    url: "https://dev.deventiatech.com/Contact-us",
    siteName: "DevEntia Tech Pvt. Ltd",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417324/getin-touch_seuzm5.jpg",
        width: 800,
        height: 600,
        alt: "Contact DevEntia Tech Office in Islamabad",
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

      {/* Google Map Embed */}
      <section className="w-full mt-10 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.224438198353!2d73.0551!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95359b9a1f15%3A0x1234567890abcdef!2sDevEntia%20Tech!5e0!3m2!1sen!2sPK!4v1729950000000!5m2!1sen!2sPK"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* LocalBusiness Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "DevEntia Tech Pvt. Ltd",
            image:
              "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417324/getin-touch_seuzm5.jpg",
            "@id": "https://dev.deventiatech.com/",
            url: "https://dev.deventiatech.com/Contact-us",
            telephone: "+92-300-1234567",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Blue Area, Islamabad",
              addressLocality: "Islamabad",
              postalCode: "44000",
              addressCountry: "PK",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.6844,
              longitude: 73.0551,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/deventiatech",
              "https://www.linkedin.com/company/deventiatech",
              "https://twitter.com/deventiatech",
            ],
          }),
        }}
      />
    </>
  );
};

export default page;
