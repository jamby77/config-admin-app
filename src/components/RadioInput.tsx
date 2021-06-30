import React from "react";
import cn from "clsx";
import { SizeVariantProps } from "./CheckboxInput";

const RadioInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & SizeVariantProps
> = (props) => {
  const { variant, ...rest } = props;
  const className = cn(
    [
      props.className,
      "bg-white",
      "text-gray-700",
      "border",
      "border-gray-400",
      "shadow-inner",
      "w-4",
      "h-4",
    ],
    {
      "w-4 h-4": variant === "small",
      "w-6 h-6": variant === "medium",
      "w-8 h-8": variant === "large",
    }
  );
  return <input {...rest} className={className} type="radio" />;
};

export default RadioInput;
