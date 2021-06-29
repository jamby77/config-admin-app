import React, { useState } from "react";
import cn from "clsx";

import { buildSections, sectionProperties } from "./helper";
import Sections from "./Sections";
import SectionTab from "./SectionTab";
import ConfigForm from "./ConfigForm";

interface ConfigEditorProps {
  config: { [key: string]: any };
  onChange?: (value: any) => void;
  onSave?: (value: any) => void;
}

const ConfigEditor: React.FC<ConfigEditorProps> = ({
  config,
  onChange,
  onSave,
}) => {
  const [currentTab, setCurrentTab] = useState("");
  const switchTab = (tab: string) => {
    return () => setCurrentTab(tab);
  };
  const { sections, misc } = buildSections(config);

  const currentValues = sectionProperties(currentTab, config, misc);
  return (
    <main className="md:flex flex-col md:flex-row md:min-h-screen w-full bg-gray-200">
      <Sections>
        <div className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-aut">
          {sections.map((s) => (
            <SectionTab
              currentSection={currentTab}
              section={s}
              key={s}
              onClick={switchTab(s)}
            />
          ))}
          {misc.length > 0 && (
            <SectionTab
              currentSection={currentTab}
              section={"misc"}
              onClick={switchTab("misc")}
            />
          )}
        </div>
      </Sections>
      {currentTab && (
        <div className="md:flex flex-col md:min-h-screen w-full">
          <div className="px-8 py-4 bg-white w-full">
            <h2 className={cn(["text-gray-800", "text-3xl", "font-semibold"])}>
              Section content
            </h2>
          </div>
          <div className="px-4 py-2 w-full">
            <div className="w-full bg-white rounded px-8 py-4">
              <ConfigForm config={currentValues} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ConfigEditor;
