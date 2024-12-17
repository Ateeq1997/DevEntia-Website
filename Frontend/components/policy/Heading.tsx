import React from "react";

export const LargeHeading = ({ text }: { text: String }) => {
  return <h1 className="font-semibold text-white text-3xl">{text}</h1>;
};
export const MediumHeading = ({ text }: { text: String }) => {
  return <h1 className="font-semibold text-white text-2xl">{text}</h1>;
};
export const SmallHeading = ({ text }: { text: String }) => {
  return <h1 className="font-normal text-white text-2xl">{text}</h1>;
};
