import React, { useState } from "react";
import cn from "clsx";

import { buildSections, sectionProperties, sectionSchema } from "./helper";
import Sections from "./Sections";
import SectionTab from "./SectionTab";

interface ConfigEditorProps {
  config: { [key: string]: any };
  schema: { [key: string]: any };
  onChange?: (value: any) => void;
  onSave?: (value: any) => void;
}

const ConfigEditor: React.FC<ConfigEditorProps> = ({
  config,
  schema,
  onChange,
  onSave,
}) => {
  const [currentTab, setCurrentTab] = useState("");
  const switchTab = (tab: string) => {
    return () => setCurrentTab(tab);
  };
  const { sections, misc } = buildSections(schema);

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
          <div className="px-8 py-4 bg-white w-full">Section content</div>
          <div className=" px-8 py-4 w-full">
            <pre>
              {JSON.stringify(
                sectionProperties(currentTab, config, misc),
                null,
                2
              )}
            </pre>
            <pre>
              {JSON.stringify(sectionSchema(currentTab, schema), null, 2)}
            </pre>
          </div>
        </div>
      )}
    </main>
  );
};

export default ConfigEditor;
