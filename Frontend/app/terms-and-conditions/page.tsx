import React from "react";
import Hero from "@/components/policy/Hero";
import TermsAndConditions from "@/components/policy/TermsAndConditions";
import { Metadata } from "next";

// ✅ Simple SEO metadata
export const metadata: Metadata = {
  title: "Terms and Conditions - DevEntia Tech Services Agreement",
  description: "Read DevEntia Tech's terms and conditions for software development services. Client agreements, intellectual property rights, and service terms explained clearly.",
  keywords: "terms and conditions, service agreement, software development, DevEntia Tech",
};

const page = () => {
  return (
    <>
      {/* H1 for SEO */}
      <h1 className="sr-only">Terms and Conditions of Service</h1>

      <Hero text={"Terms And Conditions"} />
      <TermsAndConditions />
    </>
  );
};

export default page;
