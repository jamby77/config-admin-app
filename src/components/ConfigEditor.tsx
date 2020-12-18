import React from "react";

interface ConfigEditorProps {
  config: any;
  schema: any;
  onChange?: (value: any) => void;
  onSave?: (value: any) => void;
}

const ConfigEditor: React.FC<ConfigEditorProps> = ({
  config,
    schema,
  onChange,
  onSave,
}) => {
  return (
    <div>
      <pre>{JSON.stringify(schema, null, 2)}</pre>
      <pre>{JSON.stringify(config, null, 2)}</pre>
    </div>
  );
};

export default ConfigEditor;
