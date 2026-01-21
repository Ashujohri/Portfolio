import React from "react";

interface ButtonProps {
  color?: string;
  size?: string;
  label?: string;
}

export default function Button({ color, size, label }: ButtonProps) {
  return (
    <button
      className={`btn sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-active ${
        color ? color : "btn-primary"
      }`}
    >
      {label ? label : "Primary"}
    </button>
  );
}
