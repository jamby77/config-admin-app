import React, { useState } from "react";
import cn from "clsx";
import set from "lodash/set";

import { buildSections, Config, sectionProperties } from "./helper";
import Sections from "./Sections";
import SectionTab from "./SectionTab";
import TopForm from "./ConfigForm";
import ConfigInput from "./ConfigInput";

interface ConfigEditorProps {
  config: { [key: string]: any };
  onChange: (value: Config) => void;
  onSave: () => void;
}

const ConfigEditor: React.FC<ConfigEditorProps> = ({
  config,
  onChange,
  onSave,
}) => {
  const { sections, misc } = buildSections(config);
  const [currentTab, setCurrentTab] = useState(sections && sections[0]);
  const switchTab = (tab: string) => {
    return () => setCurrentTab(tab);
  };
  const [addSection, setAddSection] = useState(false);
  const currentValues = sectionProperties(currentTab, config, misc);

  return (
    <main className="md:flex flex-col md:flex-row md:min-h-screen w-full bg-gray-200">
      <Sections onSave={onSave} onAddSection={() => setAddSection(true)}>
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
          {addSection && <ConfigInput />}
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
              <TopForm
                config={currentValues}
                onChange={(value: Config) => {
                  const update = set({ ...config }, currentTab, value);
                  onChange(update);
                }}
                path={currentTab}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ConfigEditor;
