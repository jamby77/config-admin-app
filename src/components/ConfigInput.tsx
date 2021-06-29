import React from "react";
import cn from "clsx";

const ConfigInput: React.FC<any> = (props) => {
  const className = cn([
    props.className,
    "bg-white",
    "text-gray-700",
    "border",
    "border-gray-400",
    "shadow-inner",
    "rounded-md",
    "py-3",
    "px-4",
    "leading-tight",
    "focus:outline-none",
    "focus:border-gray-500",
  ], {
    "w-full": props.type !== 'radio' && props.type !== 'checkbox'
  });
  return <input {...props} className={className} />;
};

export default ConfigInput;
