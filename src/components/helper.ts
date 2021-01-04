type Schema = { [key: string]: any };
type Config = { [key: string]: any };

const cache: Schema = {};

export const getCachedResult = (
  id: string,
  path: string,
  type: "definitions" | "ids"
) => {
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

/**
 * Resolve definition reference
 *
 * Definitions are passed as sting path like `#/definitions/objectWithValidationRules`
 * it starts with #/ and is a `/` separated path that corresponds to a path in the document
 *
 * @param path
 * @param schema
 */
const resolveDefinition = (path: string, schema: Schema) => {
  const id = schema["$id"] as string;
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

  cache[id].definitions[path] = result;
  return result;
};

/**
 * Find schema declaration by id string
 *
 * Recursive loop of the schema until ID is found
 *
 * @param id
 * @param schema
 */
const findObjectById = (id: string, schema: Schema): Schema | null => {
  // loop all `properties` and look for ID,
  for (const key in schema) {
    if (!schema.hasOwnProperty(key)) {
      continue;
    }
    const def = schema[key];
    if (def === null || typeof def !== "object") {
      continue;
    }
    if (def && def["$id"] === id) {
      return def;
    }
    const result = findObjectById(id, def);
    if (result) {
      return result;
    }
  }
  // if there are `definitions` and/or `properties` recurse into them
  return null;
};

/**
 * Resolve ID reference
 *
 * ID reference is in the same form as css id selector - `#validationRules`
 * It is set as `$id` property of an object
 *
 * @param path
 * @param schema
 */
const resolveId = (path: string, schema: Schema) => {
  const id = schema["$id"] as string;
  console.log(path, id);
  const cached = getCachedResult(id, path, "ids");
  if (cached) {
    return cached;
  }
  const obj = findObjectById(path, schema);
  cache[id].ids[path] = obj;
  return obj;
};

/**
 * Resolve reference path
 * @param path
 * @param schema
 */
export const resolveRef = (path: string, schema: Schema) => {
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

/**
 * Build main schema sections
 *
 * plain fields go into misc section
 *
 * @param schema
 */
export const buildSections = (schema: Schema) => {
  const { properties } = schema;
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
      const refProp = resolveRef(prop["$ref"], schema);
      if (
        refProp &&
        refProp.type &&
        (refProp.type === "object" || refProp.type === "array")
      ) {
        sections.push(propName);
        return;
      }
    }
    misc.push(propName);
  });
  return {
    sections,
    misc,
  };
};

export const miscSchema = (misc: string[], schema: Schema) => {
  // misc is something like:
  //   [
  //     "fuzzyEnabled",
  //     "ez1Up"
  //   ]
  // loop over it, and replace with values from schema

  return misc.reduce((acc, key) => {
    return { ...acc, [key]: schema.properties[key] };
  }, {});
};

export const sectionSchema = (section: string, schema: Schema) => {
  if (section === "misc") {
    const { misc } = buildSections(schema);
    return miscSchema(misc, schema);
  }
  return schema.properties[section];
};

const miscValues = (misc: string[], config: Config) => {
  return misc.reduce((acc, key) => {
    return { ...acc, [key]: config[key] };
  }, {});
};

export const sectionProperties = (
  section: string,
  config: Config,
  misc: string[] = []
) => {
  if (section === "misc") {
    return miscValues(misc, config);
  }
  return config[section];
};
