export const disableField = (fieldName, currentCase) => {
  const isSso = currentCase.getCaseValue('custom.externalId');
  const fieldValue = currentCase.getCaseValue(fieldName);
  return !!isSso && fieldValue !== '';
};
