import React from "react";
import Paragraph from "./Paragraph";
import { LargeHeading, MediumHeading } from "./Heading";

const PrivacyPolicy = () => {
  return (
    <section className="p-6 md:p-12 lg:p-20 relative z-50">
      <div className="absolute bg-gradient-to-tl from-purple-500 to-transparent w-[400px] h-[400px] -right-0 -bottom-0 opacity-30 blur-3xl z-0"></div>
      <Paragraph text={"Last Updated On: 11/05/2024"} />
      <LargeHeading text={"Welcome to DevEntia Tech (Pvt.) Ltd"} />
      <p className="text-[14.58px] my-4 text-[#DFDFDF] leading-6">
        At{" "}
        <span className="text-white font-bold">DevEntia Tech (Pvt.) Ltd</span>,
        we prioritize your privacy and are committed to protecting your personal
        information. This Privacy Policy explains our online information
        practices, what data we collect, and how we use it. To make this
        information accessible, we provide this Privacy Policy on our homepage
        and at every point where personally identifiable information may be
        requested.
      </p>
      {/* data collection block */}
      <div className="my-16">
        <LargeHeading text={"Data We Collect And How We Use It"} />
        <Paragraph
          text={
            "At DevEntia Tech (Pvt.) Ltd., we prioritize your privacy and only collect the minimum necessary information to facilitate communication and service inquiries. As a service-based company, our website serves as a portfolio to showcase our expertise in custom software development. You are not required to register, create an account, or provide sensitive financial information to browse our website."
          }
        />
        <MediumHeading text={"Information You Provide Voluntarily"} />
        <Paragraph
          text={
            "When you schedule a meeting or contact us through our website, we may ask for basic contact details, such as your name, email address, and phone number. This information allows us to respond to your inquiries and communicate effectively regarding our services."
          }
        />
        <MediumHeading text={"Technical Information"} />
        <Paragraph
          text={
            "To improve our website’s functionality and your user experience, we may collect limited technical information, including your IP address, browser type, and interactions with our website. This information helps us optimize our site’s performance, troubleshoot issues, and analyze site usage for improvement. Such technical data is anonymized and does not identify individual users."
          }
        />
        <MediumHeading text={"Optional Information"} />
        <Paragraph
          text={
            "Occasionally, we may offer surveys or request feedback to enhance our services. Participation in these requests is entirely optional, and any information you choose to provide will be used solely for internal improvements and customer service evaluation."
          }
        />
        <MediumHeading text={"Cookies"} />
        <Paragraph
          text={
            "We may use cookies to enhance your browsing experience and improve website functionality. You can choose to accept or reject cookies through your browser settings. Please note that rejecting cookies may limit certain functionalities on our site."
          }
        />
      </div>
      {/* data collection block end */}
      {/* data usage block */}
      <div className="mt-6">
        <LargeHeading text={"How We Use the Collected Information"} />
        <Paragraph
          text={
            "The information we collect is used strictly for communication, scheduling consultations, and analyzing site performance. We do not share, sell, or disclose your information to third parties for marketing purposes. Any collected data is handled with care and is only accessible to authorized personnel within DevEntia Tech for the purposes of delivering and improving our services."
          }
        />
        <MediumHeading text={"Links to Third-Party Sites"} />
        <Paragraph
          text={
            "Our website may contain links to external websites. DevEntia Tech (Pvt.) Ltd is not responsible for the privacy practices or content of these third-party sites. We encourage users to review the privacy policies of each site they visit before sharing any personal information."
          }
        />
        <MediumHeading text={"Disclosure of Information"} />
        <Paragraph
          text={
            "Your privacy is important to us, and we do not sell or distribute your personal information to third parties for marketing purposes. We may share information with our trusted partners, service providers, or contractors solely to fulfill your requests or process transactions. These third parties are required to adhere to our Privacy Policy’s standards in handling your information."
          }
        />
        <Paragraph
          text={
            "In certain situations, we may need to disclose your information to comply with legal obligations, such as responding to subpoenas, court orders, or government requests. We may also disclose information to protect our rights, investigate potential security threats, or address illegal activities or fraud."
          }
        />
        <MediumHeading text={"Choice And Consent"} />
        <Paragraph
          text={
            "By providing your personal information on our site and accepting cookies, you consent to our collection and use of your information as described in this Privacy Policy. If you do not agree, you may choose not to register, decline cookies, or avoid providing optional information."
          }
        />
        <MediumHeading text={"Data Security"} />
        <Paragraph
          text={
            "While we use commercially reasonable measures to protect your information, please note that complete security cannot be guaranteed. We implement SSL encryption to safeguard the transmission of sensitive information through our website."
          }
        />
        <MediumHeading text={"Commitment to Children’s Privacy"} />
        <Paragraph
          text={
            "DevEntia Tech is dedicated to protecting the privacy of minors. Our website is not directed toward children under the age of 13, and we do not knowingly collect any information from them. If we learn that we have received information from a user under 13, we will take steps to remove it in compliance with applicable laws, including the Children’s Online Privacy Protection Act (COPPA)."
          }
        />
        <MediumHeading text={"International Users"} />
        <Paragraph
          text={
            "By using our website, you agree that we may process and store your information both inside and outside of Pakistan, in accordance with this Privacy Policy and local legal requirements."
          }
        />
        <MediumHeading text={"Access to your information"} />
        <Paragraph
          text={
            "As a service-based company, DevEntia Tech (Pvt.) Ltd. does not require account registration, nor do we store personal financial information or credit card details on our website. Visitors are free to explore our portfolio of services and products without the need to create an account or log in."
          }
        />
        <Paragraph
          text={
            "If you are interested in our services, you have the option to schedule a consultation with us through our contact form. Any information you provide in this context (such as your name and contact details) will be used solely for communication related to your inquiry. Should you need to update or correct any contact details you've shared, you may reach out to us directly through the provided contact information on our website, and we will assist you in making any necessary adjustments"
          }
        />
        <Paragraph
          text={
            "For any questions about this Privacy Policy or to request access to your information, please contact us."
          }
        />
      </div>
      {/* data usage block end */}
    </section>
  );
};

export default PrivacyPolicy;
