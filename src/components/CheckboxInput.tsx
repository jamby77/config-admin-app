import React from "react";
import cn from "clsx";

export type SizeVariantProps = {
  variant?: "small" | "medium" | "large";
};

const CheckboxInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & SizeVariantProps
> = (props) => {
  const { className, variant = "small", ...rest } = props;
  const cName = cn(
    [
      className,
      "bg-white",
      "text-gray-700",
      "border",
      "border-gray-400",
      "shadow-inner",
    ],
    {
      "w-4 h-4": variant === "small",
      "w-6 h-6": variant === "medium",
      "w-8 h-8": variant === "large",
    }
  );
  return <input {...rest} className={cName} type="checkbox" />;
};

export default CheckboxInput;
