import React from "react";
import Hero from "@/components/policy/Hero";
import PrivacyPolicy from "@/components/policy/PrivacyPolicy";
import { Metadata } from "next";

// ✅ Simple SEO metadata
export const metadata: Metadata = {
  title: "Privacy Policy - How DevEntia Tech Protects Your Data",
  description: "DevEntia Tech's privacy policy explains how we collect, use, and protect your personal data. GDPR compliant data handling and security practices detailed.",
  keywords: "privacy policy, GDPR, data protection, DevEntia Tech, personal data security",
};

const page = () => {
  return (
    <>
      {/* H1 for SEO */}
      <h1 className="sr-only">Privacy Policy - Your Data Security Matters</h1>

      <Hero text={"Privacy Policy"} />
      <PrivacyPolicy />
    </>
  );
};

export default page;
