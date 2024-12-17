import React from "react";

const Para = ({ text }: { text: String }) => {
  return (
    <p className="font-normal text-base text-[#DFDFDF] my-4 text-justify">
      {text}
    </p>
  );
};

export default Para;
