import React from "react";
import cn from "clsx";

const SectionTab = ({
  section,
  currentSection,
  onClick,
}: {
  section: string;
  currentSection: string;
  onClick: () => any;
}) => {
  const tabCn = cn('SectionTab',
    [
      "block",
      "px-4",
      "py-2",
      "mt-2",
      "text-sm",
      "font-semibold",
      "text-gray-900",
      "rounded-lg",
      "dark-mode:hover:bg-gray-600",
      "dark-mode:focus:bg-gray-600",
      "dark-mode:focus:text-white",
      "dark-mode:hover:text-white",
      "dark-mode:text-gray-200",
      "hover:text-gray-900",
      "focus:text-gray-900",
      "hover:bg-gray-200",
      "focus:bg-gray-200",
      "focus:outline-none",
      "focus:shadow-outline",
    ],
    {
      "bg-gray-200 dark-mode:bg-gray-700": currentSection === section,
      "bg-transparent dark-mode:bg-transparent": currentSection !== section,
    }
  );
  return (
    <div
      className={tabCn}
      onClick={onClick}
    >
      {section}
    </div>
  );
};

export default SectionTab;
