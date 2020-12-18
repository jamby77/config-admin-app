import React from "react";

interface ConfigEditorProps {
  config: { [key: string]: any };
  schema: { [key: string]: any };
  onChange?: (value: any) => void;
  onSave?: (value: any) => void;
}
const cache: { [key: string]: any } = {};

const getCachedResult = (
  id: string,
  path: string,
  type: "definitions" | "ids"
) => {
  console.log(path, id);
  if (!cache[id]) {
    cache[id] = {
      definitions: {},
      ids: {},
    };
  }
  if (cache[id][type][path]) {
    return cache[id][type][path];
  }
  return null;
};
const resolveDefinition = (path: string, schema: { [key: string]: any }) => {
  const id = schema["$id"] as string;
  console.log(path, id);
  const cached = getCachedResult(id, path, "definitions");
  if (cached) {
    return cached;
  }
  const cleanPath = path.replace("#/", "");
  const pathParts = cleanPath.split("/");
  const result = pathParts.reduce((schemaObj, key) => {
    if (schemaObj.hasOwnProperty(key)) {
      return schemaObj[key];
    }
    return schemaObj;
  }, schema);

  console.log(result);
  cache[id].definitions[path] = result;
  return result;
};

const resolveId = (path: string, schema: { [key: string]: any }) => {
  const id = schema["$id"] as string;
  console.log(path, id);
  const cached = getCachedResult(id, path, "ids");
  if (cached) {
    return cached;
  }
  const cleanPath = path.replace("#/", "");
  // todo: parse entire schema for the ID
};

const resolveRef = (path: string, schema: { [key: string]: any }) => {
  const isDefinition = path.startsWith("#/", 0);
  const isId = !isDefinition && path.startsWith("#");
  if (isDefinition) {
    return resolveDefinition(path, schema);
  }

  if (isId) {
    return resolveId(path, schema);
  }
  throw Error(`${path} is not an internal reference`);
};

const ConfigEditor: React.FC<ConfigEditorProps> = ({
  config,
  schema,
  onChange,
  onSave,
}) => {
  const { properties, required } = schema;
  const sections: string[] = [];
  const misc: string[] = [];
  Object.keys(properties).forEach((propName) => {
    const prop = properties[propName];
    const { type } = prop;
    if (type && (type === "object" || type === "array")) {
      sections.push(propName);
      return;
    }
    if (type === undefined) {
      console.log(prop["$ref"]);
      const refProp = resolveRef(prop["$ref"], schema);
    }
    misc.push(propName);
  });

  return (
    <div>
      <pre>{JSON.stringify({ sections, misc }, null, 2)}</pre>
    </div>
  );
};

export default ConfigEditor;
