import React from "react";
import schema from "../schema/config.json";
import { resolveRef } from "./helper";

test("resolve $ref #/properties/pageRoutes/definitions/route", () => {
  const resolved = resolveRef(
    "#/properties/pageRoutes/definitions/route",
    schema
  );
  const expected = {
    type: "object",
    properties: {
      url: {
        type: "string",
      },
      title: {
        type: "string",
      },
      excludeModules: {
        type: "array",
        items: {
          type: "string",
        },
      },
    },
  };

  expect(resolved).toEqual(expected);
});

test("resolve $ref #validationRules", () => {
  const resolved = resolveRef("#validationRules", schema);
  const expected = {
    $id: "#validationRules",
    type: "string",
  };

  expect(resolved).toEqual(expected);
});

test("resolve $ref #inputProps", () => {
  const resolved = resolveRef("#inputProps", schema);
  const expected = {
    $id: "#inputProps",
    type: "object",
  };
  expect(resolved).toEqual(expected);
});

test("resolve $ref #birthDate", () => {
  const resolved = resolveRef("#birthDate", schema);
  const expected = {
    $id: "#birthDate",
    type: "object",
    anyOf: [
      {
        $ref: "#objectWithValidationRules",
      },
      {
        properties: {
          minAge: {
            type: "number",
            minimum: 0,
          },
          maxAge: {
            type: "number",
            minimum: 0,
          },
        },
      },
    ],
  };

  expect(resolved).toEqual(expected);
});

test("resolve $ref #address", () => {
  const resolved = resolveRef("#address", schema);
  const expected = {
    $id: "#address",
    type: "object",
    anyOf: [
      {
        $ref: "#objectWithValidationRules",
      },
      {
        properties: {
          policyField: {
            type: "string",
          },
          lastLineManualEditing: {
            type: "boolean",
          },
          manualAddress: {
            $id: "#manualAddress",
            type: "object",
            properties: {
              line1: {
                $ref: "#objectWithValidationRules",
              },
              line2: {
                $ref: "#objectWithValidationRules",
              },
              town: {
                $ref: "#objectWithValidationRules",
              },
              postcode: {
                $ref: "#objectWithValidationRules",
              },
              country: {
                anyOf: [
                  { $ref: "#objectWithValidationRules" },
                  {
                    $ref: "#inputProps",
                  },
                ],
              },
            },
          },
        },
      },
    ],
  };

  expect(resolved).toEqual(expected);
});
