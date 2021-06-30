export type Config = { [key: string]: any };

export const OtherInputTypes = {
  color: "color",
  file: "file",
  hidden: "hidden",
  image: "image",
  range: "range",
  url: "url",
};

export const DateInputTypes = {
  date: "date",
  "datetime-local": "datetime-local",
  month: "month",
  time: "time",
  week: "week",
};

export const TextInputTypes = {
  email: "email",
  number: "number",
  password: "password",
  search: "search",
  tel: "tel",
  text: "text",
  url: "url",
};

export const CheckRadioInputTypes = {
  checkbox: "checkbox",
  radio: "radio",
};

export const ButtonInputTypes = {
  button: "button",
  reset: "reset",
  submit: "submit",
};

/**
 * Build main schema sections
 *
 * plain fields go into misc section
 *
 * @param config
 */
export const buildSections = (config: Config) => {
  const sections: string[] = [];
  const misc: string[] = [];
  Object.entries(config).forEach(([propName, prop]) => {
    const type = typeof prop;
    if (type === "object" && prop !== null) {
      sections.push(propName);
      return;
    }
    misc.push(propName);
  });
  return {
    sections,
    misc,
  };
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
