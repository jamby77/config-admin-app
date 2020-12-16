import Validator from 'validatorjs';
import moment from 'moment';
import { get } from 'lodash';
import config from '../config/config';

/**
 * Validate that the difference between a selected `date` and today is equal|greater than `minAge`
 * @name ageAbove
 * @param {String} date
 * @param {String} minAge
 * @returns {Boolean} isDiffGreaterOrEqualThanMinAge
 */
const ageAbove = (date, minAge) => {
  const today = moment();
  const selectedDate = moment(date);
  const diffBetweenTodayAndSelectedDate = today.diff(selectedDate, 'years');
  const isDiffGreaterOrEqualThanMinAge = diffBetweenTodayAndSelectedDate >= minAge;

  return isDiffGreaterOrEqualThanMinAge;
};

/**
 * Validate email candidate if contains @, has domain and if the host contains only letters, numbers, dots, underscore or dash
 * @param {String} email
 * @returns {Boolean} isValidEmail
 */
const validEmail = (email) => {
  let validEmailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  // Add localhost in order to test it locally
  if (window.location.host === 'ui.qa2.metro.ezbob.com') {
    // Allow + sign in email name for QAs and DEVs for testing purposes
    validEmailRegex = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-+]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  }

  const isValidEmail = validEmailRegex.test(String(email).toLowerCase());

  return isValidEmail;
};

/**
 * Validate UK postcode pattern
 * @param {String} postcode
 * @returns {Boolean} isValidPostcode
 */
const validUkPostcode = (postcode) => {
  const postcodeRegex = /^([a-z0-9]\s*){5,8}$/i;
  const isValidPostcode = postcodeRegex.test(String(postcode).toLocaleLowerCase());

  return isValidPostcode;
};

/**
 * Validate UK city name pattern
 * @param {String} cityName
 * @returns {Boolean} isValidlCityName
 */
const validUKCityName = (cityName) => {
  const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  const isValidlCityName = cityRegex.test(String(cityName).toLocaleLowerCase());

  return isValidlCityName;
};

/**
 * Validate UK address pattern
 * @param {String} cityName
 * @returns {Boolean} isValidAddress
 */
const validUKAddress = (address) => {
  const addressRegex = /^([a-zA-Z0-9,\s]+)$/i;
  const isValidAddress = addressRegex.test(String(address).toLocaleLowerCase());

  return isValidAddress;
};

/**
 * Validate if a given string contains only digits and letters a-z 0-9 (allow spaces)
 * @param {String} digitsLettersOnly
 * @returns {Boolean} doesValueContainsDigitsAndLettersOnly
 */
const digitsLettersOnly = (value) => {
  const digitsLettersRegex = /^([a-zA-Z0-9\s]+)$/i;
  const doesValueContainsDigitsAndLettersOnly = digitsLettersRegex.test(
    String(value).toLocaleLowerCase()
  );

  return doesValueContainsDigitsAndLettersOnly;
};

/**
 * Validate if a given string contains only digits and letters a-z 0-9 (allow spaces)
 * @param {String} lettersOnly
 * @returns {Boolean} doesValueContainsOnlyletters
 */
const lettersOnly = (value) => {
  const lettersRegex = /^[a-zA-Z\s]+$/i;
  const doesValueContainsOnlyletters = lettersRegex.test(value);

  return doesValueContainsOnlyletters;
};

const validCompanyName = (value) => {
  const validCompanyNameRegex = /^[a-zA-Z0-9()&.,\-\s]+$/i;
  const isValidCompanyName = validCompanyNameRegex.test(value);

  return isValidCompanyName;
};

const validPassword = (password) => {
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9])[0-9a-zA-Z#?!@$%^&*-]{8,60}$/;
  const isValidPassword = passwordRegex.test(password);

  return isValidPassword;
};

const validTradingName = (tradingName) => {
  const tradingNameRegex = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
  const isValidTradingName = tradingNameRegex.test(tradingName);

  return isValidTradingName;
};

const validSurname = (surname) => {
  const surnameRegex = /^[a-zA-Z\s'-]+$/g;
  const isValidSurname = surnameRegex.test(surname);

  return isValidSurname;
};

const validNationalities = (values) => {
  const configuredLength = config.custom.nationalitiesCount || 2;
  return Array.isArray(values) && values.length <= configuredLength;
};

const getSelectedDate = (inputDate, fieldName) => {
  try {
    const path = `widgetsConfig.${fieldName}.dateFormat`;
    const dateFormat = get(config, path);
    return moment(inputDate, dateFormat, true);
  } catch (e) {
    console.error(e);
  }
  return moment.invalid();
};

const validateMinAge = (inputDate, age, fieldName) => {
  const selectedDate = getSelectedDate(inputDate, fieldName);
  const minDate = moment().subtract(age, 'years');
  return minDate.isAfter(selectedDate);
};

const validateMaxAge = (inputDate, age, fieldName) => {
  const selectedDate = getSelectedDate(inputDate, fieldName);
  const maxDate = moment().subtract(age, 'years');
  return maxDate.isBefore(selectedDate);
};

const validateValidDateFormat = (inputDate, formatRegexString) => {
  if (!inputDate) {
    return true;
  }
  const re = new RegExp(formatRegexString);
  return re.test(inputDate);
};

const validateValidDate = (inputDate, _, fieldName) => {
  if (!inputDate) {
    return true;
  }
  const theDate = getSelectedDate(inputDate, fieldName);
  return theDate.isValid();
};

// Register you handler here
const validationsToRegister = [
  { name: 'validSurname', handler: validSurname },
  { name: 'validTradingName', handler: validTradingName },
  { name: 'validPassword', handler: validPassword },
  { name: 'validCompanyName', handler: validCompanyName },
  { name: 'lettersOnly', handler: lettersOnly },
  { name: 'digitsLettersOnly', handler: digitsLettersOnly },
  { name: 'ageAbove', handler: ageAbove },
  { name: 'validEmail', handler: validEmail },
  { name: 'validUkPostcode', handler: validUkPostcode },
  { name: 'validUKCityName', handler: validUKCityName },
  { name: 'validUKAddress', handler: validUKAddress },
  { name: 'validateValidDate', handler: validateValidDate },
  { name: 'validateValidDateFormat', handler: validateValidDateFormat },
  { name: 'validateMinAge', handler: validateMinAge },
  { name: 'validateMaxAge', handler: validateMaxAge },
  { name: 'validUKAddress', handler: validUKAddress },
  { name: 'validNationalities', handler: validNationalities },
];

validationsToRegister.forEach(({ name, handler }) => Validator.register(name, handler));
