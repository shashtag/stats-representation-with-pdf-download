import React from "react";
type Props = {
  color: string;
  children: string;
};
const AboutPoint = ({ color, children }: Props) => {
  return (
    <div
      style={{ transformStyle: "preserve-3d" }}
      className='mt-8 mx-4 relative  bg-[#e2e8f5] p-8 py-4 rounded-sm '>
      <div
        style={{ transform: "translateZ(-1px)" }}
        className={`h-full aspect-square absolute rounded-sm bg-[${color}] -top-4 -left-4`}></div>
      <p>{children}</p>
    </div>
  );
};

export default AboutPoint;
