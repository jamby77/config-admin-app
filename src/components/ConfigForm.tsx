import set from "lodash/set";
import { Config } from "./helper";
import ConfigInput from "./ConfigInput";
import CheckboxInput from "./CheckboxInput";
import { useCallback } from "react";

function RenderField({
  field,
  value,
  onChange,
  path,
}: {
  field: string;
  value: any;
  onChange: (value: any, path: string) => void;
  path: string;
}) {
  const type = typeof value;

  if (type === "object") {
    if (Array.isArray(value)) {
      return (
        <div className="w-full md:w-full pl-3 mb-6">
          <div className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            {field}
          </div>
          {value.map((item, idx) => (
            <RenderField
              key={`${path}.${idx}`}
              field={`${path}[${idx}]`}
              value={item}
              onChange={onChange}
              path={`${path}.${idx}`}
            />
          ))}
        </div>
      );
    }
    return (
      <div className="w-full md:w-full pl-3 mb-6">
        <div className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          {field}
        </div>
        <ConfigForm config={value} onChange={onChange} path={path} />
      </div>
    );
  }

  if (type === "string") {
    return (
      <div className="w-full md:w-full pl-3 mb-6">
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          {field}
          <ConfigInput
            value={value as string}
            type="text"
            className="mt-1"
            onChange={(event) => {
              const value = event.target.value;
              onChange(value, path);
            }}
          />
        </label>
      </div>
    );
  }

  if (type === "number") {
    return (
      <div className="w-full md:w-full pl-3 mb-6">
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          {field}
          <ConfigInput
            value={value as string}
            type="number"
            className="mt-1"
            onChange={(event) => {
              const value = Number(event.target.value);
              if (isNaN(value)) {
                console.log("Invalid number ");
                return;
              }
              onChange(value, path);
            }}
          />
        </label>
      </div>
    );
  }

  if (type === "boolean") {
    return (
      <div className="w-full md:w-full pl-3 mb-6">
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          {field} <br />
          <CheckboxInput
            checked={Boolean(value)}
            variant="medium"
            className="mt-1"
            onChange={(event) => {
              const value = event.target.checked;
              onChange(value, path);
            }}
          />
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

function TopForm({
  config,
  onChange,
  path = "",
}: {
  config: Config;
  onChange: (value: Config) => void;
  path?: string;
}) {
  const onFieldChange = useCallback(
    (value, path) => {
      const update = set(config, path, value);
      onChange(update);
    },
    [onChange, config]
  );

  if (!config) {
    return <div>Config must be object, {typeof config} passed</div>;
  }
  return <ConfigForm config={config} onChange={onFieldChange} />;
}

function ConfigForm({
  config,
  onChange,
  path = "",
}: {
  config: Config;
  onChange: (value: any, path: string) => void;
  path?: string;
}) {
  const fields = Object.entries(config);
  return (
    <div className="pl-4 border-l border-blue-300">
      {fields.map(([field, value]) => {
        return (
          <RenderField
            key={field}
            field={field}
            value={value}
            path={`${path}${path ? "." : ""}${field}`}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
}

export default TopForm;
