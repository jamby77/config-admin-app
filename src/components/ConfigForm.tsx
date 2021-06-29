import React from "react";
import { Config } from "./helper";
import ConfigInput from "./ConfigInput";

function RenderField({ field, value }: { field: string; value: any }) {
  const type = typeof value;

  if (type === "object") {
    if (Array.isArray(value)) {
      return (
        <div className="w-full md:w-full px-3 mb-6">
          <div className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            {field}
          </div>
          {value.map((item, idx) => (
            <RenderField key={`${field}-${idx}`} field={``} value={item} />
          ))}
        </div>
      );
    }
    return (
      <div className="w-full md:w-full px-3 mb-6">
        <div className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          {field}
        </div>
        <ConfigForm config={value} />
      </div>
    );
  }

  if (type === "string") {
    return (
      <div className="w-full md:w-full px-3 mb-6">
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          {field}
          <ConfigInput value={value as string} type="text" />
        </label>
      </div>
    );
  }
  if (type === "number") {
    return (
      <div className="w-full md:w-full px-3 mb-6">
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          {field}
          <ConfigInput value={value as string} type="number" />
        </label>
      </div>
    );
  }

  if (type === "boolean") {
    return (
      <div className="w-full md:w-full px-3 mb-6">
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          {field}
          <ConfigInput checked={Boolean(value)} type="checkbox" />
        </label>
      </div>
    );
  }

  return (
    <div>
      <div className="label">
        {field} : {type}
      </div>
      <div className="error">Cannot render input for this field type</div>
    </div>
  );
}

function ConfigForm({ config }: { config: Config }) {
  if (!config) {
    return <div>Config must be object, {typeof config} passed</div>;
  }
  const fields = Object.entries(config);
  return (
    <div className="pl-4 border-l border-blue-300">
      {fields.map(([field, value]) => {
        return <RenderField key={field} field={field} value={value} />;
      })}
    </div>
  );
}

export default ConfigForm;
