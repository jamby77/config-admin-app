import React from "react";
import cn from "clsx";

const Sections = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn([
        "flex",
        "flex-col",
        "w-full",
        "md:w-64",
        "text-gray-700",
        "bg-white",
        "dark-mode:text-gray-200",
        "dark-mode:bg-gray-800",
        "flex-shrink-0",
        "shadow-inner",
      ])}
    >
      <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
        <a
          href="#"
          className={cn([
            "text-lg",
            "font-semibold",
            "tracking-widest",
            "text-gray-900",
            "uppercase",
            "rounded-lg",
            "dark-mode:text-white",
            "focus:outline-none",
            "focus:shadow-outline",
          ])}
        >
          Config UI
        </a>
        <button className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline">
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {children}
    </div>
  );
};

export default Sections;