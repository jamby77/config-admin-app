import React, { useState } from "react";
import {buildSections, sectionProperties, sectionSchema} from "./helper";

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
    <main>
      <div className="tabs">
        {sections.map((s) => (
          <div className="tab-heading" key={s} onClick={switchTab(s)}>
            {s}
          </div>
        ))}
        {misc.length > 0 && (
          <div className="tab-heading" onClick={switchTab("misc")}>
            misc
          </div>
        )}
      </div>
      {currentTab && (
        <div className="tab-content">
          <div>Section schema</div>
          <pre>
            {JSON.stringify(sectionSchema(currentTab, schema), null, 2)}
          </pre>
          <div>Section content</div>
          <pre>
            {JSON.stringify(sectionProperties(currentTab, config, misc), null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
};

export default ConfigEditor;
