import React from "react";
import cn from "clsx";

const tabCn = [
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
];
const activeTabCn = cn(tabCn, "bg-gray-200 dark-mode:bg-gray-700");
const inActiveCn = cn(tabCn, "bg-transparent dark-mode:bg-transparent");

const SectionTab = ({
  section,
  currentSection,
  onClick,
}: {
  section: string;
  currentSection: string;
  onClick: () => any;
}) => {
  return (
    <div
      className={currentSection === section ? activeTabCn : inActiveCn}
      onClick={onClick}
    >
      {section}
    </div>
  );
};

export default SectionTab;
