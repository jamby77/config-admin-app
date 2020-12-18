import React from "react";

interface ConfigEditorProps {
  config: any;
  onChange?: (value: any) => void;
  onSave?: (value: any) => void;
}

const ConfigEditor: React.FC<ConfigEditorProps> = ({
  config,
  onChange,
  onSave,
}) => {
  return (
    <div>
      <pre>{JSON.stringify(config, null, 2)}</pre>
    </div>
  );
};

export default ConfigEditor;
