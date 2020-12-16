export const formatAddressToString = (address) => {
  const { line1, region, town, country, postcode } = address;
  const addressString = [line1, region, town, country, postcode]
    .filter((addressInfo) => addressInfo !== undefined && addressInfo !== null)
    .join(', ');

  return addressString;
};

// TODO: Make it work with more currencies when needed
export const toCurrencyString = (number, minimumFractionDigits = 0) => {
  if (number !== undefined && number !== null) {
    const formatterOptions = { style: 'currency', currency: 'GBP', minimumFractionDigits };
    const formatter = new Intl.NumberFormat('en-GB', formatterOptions);
    const formattedNumber = formatter.format(number);

    return formattedNumber;
  }

  return number;
};

export const toPercentString = (number, precision = 2) => {
  if (number !== undefined && number !== null) {
    return `${number.toFixed(precision)}%`;
  }

  return number;
};
