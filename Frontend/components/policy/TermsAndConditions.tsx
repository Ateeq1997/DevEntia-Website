import React from "react";
import Paragraph from "./Paragraph";
import { LargeHeading, SmallHeading, MediumHeading } from "./Heading";

const TermsAndConditions = () => {
  return (
    <section className="p-6 md:p-12 lg:p-20 relative z-50">
      <div className="absolute bg-gradient-to-tl from-purple-500 to-transparent w-[400px] h-[400px] -right-0 -bottom-0 opacity-30 blur-3xl z-0"></div>

      <Paragraph text={"Last Updated On: 11/05/2024"} />
      <LargeHeading text={"Welcome to DevEntia Tech (Pvt.) Ltd"} />
      <p className="text-[14.58px] my-4 text-[#DFDFDF] leading-6 text-justify">
        <span className="text-white font-bold">DevEntia Tech (Pvt.) Ltd.</span>{" "}
        is an IT consulting company that provides Managed IT Services, IT
        Support Services, IT Outsourcing, Technical Support, and Cloud Services.
        By using our website or engaging with our services, you agree to the
        terms and conditions outlined in this agreement (“Agreement”). Please
        read these terms carefully, as they govern your use of our website and
        services.
      </p>
      <div>
        <MediumHeading text={"Acceptance Of Terms "} />
        <Paragraph
          text={
            "By accessing, browsing, or using this site, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. DevEntia Tech (Pvt.) Ltd. reserves the right to modify these terms at any time without prior notice. Continued use of our website or services constitutes acceptance of any changes made."
          }
        />
        <SmallHeading text={"Use Of Site"} />
        <Paragraph
          text={
            "You must be at least 18 years old or use the site under the supervision of a parent or guardian. You are granted a limited, non-exclusive, and revocable license to access and use the site solely for evaluating our services. Any misuse of this license, including unauthorized reproduction, distribution, or modification of site content, will result in the immediate termination of your right to use the site."
          }
        />
        <SmallHeading text={"Except as explicitly permitted, you may not:"} />
        <ul
          style={{ listStyle: "disc inside", color: "white" }}
          className="my-4 text-justify"
        >
          <li>
            Use the site for any commercial purpose beyond evaluating our
            services.
          </li>
          <li>
            Copy, reproduce, modify, create derivative works from, or publicly
            display any portion of the site without prior written consent from
            DevEntia Tech (Pvt.) Ltd.
          </li>
          <li>
            Distribute, upload, or publish any content that infringes on
            intellectual property rights, violates laws, or includes harmful
            code, such as viruses or malware.
          </li>
        </ul>
        <MediumHeading text={"Intellectual Property"} />
        <Paragraph
          text={
            "All content on this site, including text, images, logos, and software, is the exclusive property of DevEntia Tech (Pvt.) Ltd. and protected by copyright, trademark, and other intellectual property laws. The arrangement and presentation of content are proprietary to DevEntia Tech (Pvt.) Ltd. You are prohibited from using our trademarks, service marks, or any content from this site in any way that could cause confusion or misrepresent our brand."
          }
        />
        <MediumHeading text={"Security and Accounts"} />
        <Paragraph
          text={
            "In some cases, you may be issued a password or account identification to access secure portions of the site. You are solely responsible for maintaining the confidentiality of this information. DevEntia Tech (Pvt.) Ltd. will not be held responsible for unauthorized access or activity under your account due to failure to safeguard your credentials."
          }
        />
        <MediumHeading text={"Termination Of Access"} />
        <Paragraph
          text={
            "DevEntia Tech (Pvt.) Ltd. reserves the right to terminate this Agreement and revoke your access to the site or services at any time if we believe there has been a breach of terms or any unlawful or inappropriate activity. Upon termination, you agree to cease all use of the site, and any associated credentials may be revoked."
          }
        />
        <MediumHeading text={"International Use"} />
        <Paragraph
          text={
            "Our website is intended for users within the jurisdictions we operate in, and some services may not be available outside these regions. By accessing the site from outside these areas, you assume responsibility for compliance with local laws, regulations, and restrictions."
          }
        />
        <MediumHeading text={"Disclaimer Of Liability"} />
        <Paragraph
          text={
            "All information provided on our site is intended for informational purposes only. While we strive to ensure accuracy, DevEntia Tech (Pvt.) Ltd. makes no representations or warranties regarding the content’s completeness or reliability. We disclaim liability for any errors or omissions in the site’s content or any actions taken based on the information provided."
          }
        />
        <MediumHeading text={"Typographical Errors"} />
        <Paragraph
          text={
            "In case of typographical errors on our site, DevEntia Tech (Pvt.) Ltd. reserves the right to correct such errors without prior notice. We are not liable for any discrepancies due to inaccuracies in information provided on the site."
          }
        />
        <MediumHeading text={"Links To Third-Party Sites"} />
        <Paragraph
          text={
            "Our site may contain links to external websites for informational purposes. DevEntia Tech (Pvt.) Ltd. is not responsible for the content, operation, or privacy practices of any third-party websites. Access to these sites is at the user's own risk."
          }
        />
        <MediumHeading text={"Remedies and Waivers"} />
        <Paragraph
          text={
            "In the event of any actual or potential breach of this Agreement, DevEntia Tech (Pvt.) Ltd. reserves the right to pursue all legal remedies, including but not limited to specific performance or injunction. No waiver by us of any term shall imply a waiver of any other term, nor does any waiver at any time mean a waiver in the future."
          }
        />
        <MediumHeading text={"Severability "} />
        <Paragraph
          text={
            "If any term of this Agreement is found invalid or unenforceable, the remaining provisions shall remain in full force. The invalid provision will be replaced with a valid term that most closely matches the intent of the original term."
          }
        />
      </div>
    </section>
  );
};

export default TermsAndConditions;
