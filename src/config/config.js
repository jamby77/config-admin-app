import enLanguage from './languages/en-US';
// import theme from './theme';

import loanPurposeList_LIMITED_COMPANY from './lists/loanPurpose_LIMITED_COMPANY';
import loanPurposeList_SOLE_TRADER from './lists/loanPurpose_SOLE_TRADER';

import numberOfEmployeesListLIMITED_COMPANY from './lists/numberOfEmployeesListLIMITED_COMPANY';
import numberOfEmployeesListSOLE_TRADER from './lists/numberOfEmployeesListSOLE_TRADER';
import balanceSheetLIMITED_COMPANY from './lists/balanceSheetLIMITED_COMPANY';
import balanceSheeteList_SOLE_TRADER from './lists/balanceSheeteList_SOLE_TRADER';
import annualRevenueList from './lists/annualRevenueList.json';

import typeOfBusiness from './lists/typeOfBusiness';
import propertyStatusList from './lists/propertyStatus';
import tradingActivityList from './lists/tradingActivity';
import title from './lists/title';
import countryList from './lists/countryList';
import sourceOfIncomeList from './lists/sourceOfIncome';
import theme from './theme';

import { stepName, rejectionPageName } from '../utils/constants';

const locals = {
  currencySign: '£',
  country: 'UK',
  countryCode: 'GB',
  currency: 'GBP', // https://www.currency-iso.org/dam/downloads/lists/list_one.xml
};

/**
 * validatorjs docs - https://github.com/skaterdav85/validatorjs
 * Cleave.js - https://github.com/nosir/cleave.js/blob/master/doc/options.md
 * moment durations - https://momentjs.com/docs/#/durations/
 */
const currencyFormattingOptions = {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
  numeralPositiveOnly: true,
  prefix: locals.currencySign,
  noImmediatePrefix: true,
  numericOnly: true,
  rawValueTrimPrefix: true,
  trailingDecimalOnBlur: true,
  numeralDecimalScale: 2,
  numeralIntegerScale: 8,
};

const digitsFormatingOptions = {
  numeral: true,
  numericOnly: true,
  numeralDecimalScale: 0
};

const amountFormattingOptions = {
  ...currencyFormattingOptions,
  numeralDecimalScale: 0,
};

const currencyFormattingAmountOptions = {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
  numeralDecimalScale: 2,
  delimiter: ',',
  numeralDecimalMark: ',',
  numeralPositiveOnly: true,
  prefix: locals.currencySign,
  noImmediatePrefix: true,
  numericOnly: true,
  rawValueTrimPrefix: true,
};
const currencyMaxRangeFormattingOptions = {
  ...currencyFormattingOptions,
};

const termFormatOptions = {
  numeral: true,
  numeralPositiveOnly: true,
  numericOnly: true,
  numeralDecimalScale: 0,
  numeralIntegerScale: 2,
};

const percentageFormatOptions = {
  numeral: true,
  numeralPositiveOnly: true,
  noImmediatePrefix: false,
  numericOnly: true,
  rawValueTrimPrefix: true,
  trailingDecimalOnBlur: true,
  numeralDecimalScale: 0,
  numeralIntegerScale: 3,
};

const config = {
  system: {
    vendorName: "Metro Bank",
    uiVersion: "0.2.2",
    inactiveLogout: { minutes: 10 }, // Use moment docs for formatting -  https://momentjs.com/docs/#/durations/
    checkFraud: false,
    currencySign: locals.currencySign,
    infoList: {
      checked: {
        LIMITED_COMPANY: {
          minAge: 18,
          resident: "UK",
          minActivelyTrading: 18,
          minAnnualTurnover: "15,000",
          maxAnnualTurnover: "43,000,000",
          maxBalanceSheet: "36,000,000",
          maxEmployees: "250",
          monthsRegistration: "18",
          maxVotingRights: "25",
        },
      },
    },
  },
  locals,
  product: {
    loanType: "business loan",
  },
  pageRoutes: {
    customerWizard: {
      url: "/customer/wizard",
    },
    customerLogin: {
      url: "/customer/login",
      excludeModules: ["ProgressBar"],
      title: "pageRoutes.customerLogin",
    },
    customerIdVerification: {
      url: "/customer/id-verification",
      excludeModules: ["ProgressBar"],
      title: "pageRoutes.idVerification",
    },
    forgotPassword: {
      url: "/account/forgot-password",
      excludeModules: ["ProgressBar"],
      title: "pageRoutes.forgotPassword",
    },
    accountSetPassword: {
      url: "/account/set-password",
      excludeModules: ["ProgressBar"],
      title: "pageRoutes.accountSetPassword",
    },
    accountVerifyEmail: {
      url: "/account/verify-email",
      excludeModules: ["ProgressBar"],
      title: "pageRoutes.accountVerifyEmail",
    },
    accountLogout: {
      url: "/account/logout",
      excludeModules: ["ProgressBar"],
      title: "pageRoutes.accountLogout",
    },
    notFound: {
      url: "*",
      excludeModules: ["ProgressBar"],
      title: "pageRoutes.notFound",
    },
  },
  modals: {
    UploadDocModal: {},
    ShareholderDetails: {},
    LinkAccountDetails: {},
    GeneralError: {
      excludeModules: ["ProgressBar"],
    },
  },
  steps: [
    {
      stepName: rejectionPageName.rejectionNotLimitedCompany,
      excludeModules: ["ProgressBar"],
    },
    { stepName: rejectionPageName.refer, excludeModules: ["ProgressBar"] },
    {
      stepName: rejectionPageName.rejectionCompanyType,
      excludeModules: ["ProgressBar"],
    },
    {
      stepName: rejectionPageName.rejectionNotSME,
      excludeModules: ["ProgressBar"],
    },
    {
      stepName: rejectionPageName.rejectionQuoteRequest,
      excludeModules: ["ProgressBar"],
    },
    {
      stepName: rejectionPageName.rejectionCustomerAlreadyExist,
      excludeModules: ["ProgressBar"],
    },
    {
      stepName: rejectionPageName.rejectionFullDecision,
      excludeModules: ["ProgressBar"],
    },
    {
      stepName: rejectionPageName.rejectionQuoteError,
      excludeModules: ["ProgressBar"],
    },
    {
      stepName: rejectionPageName.rejectedWrongDetails,
      excludeModules: ["ProgressBar"],
    },
    {
      stepName: rejectionPageName.rejectedMoreThan1Director,
      excludeModules: ["ProgressBar"],
    },
    {
      stepName: rejectionPageName.fundingOptionsReferral,
      excludeModules: ["ProgressBar"],
    },
    {
      stepName: stepName.businessTypeSelection,
      default: true,
      excludeModules: ["ProgressBar"],
    },
    {
      stepName: stepName.instantQuote1,
      progressBarStep: stepName.instantQuote1,
    },
    {
      stepName: stepName.instantQuote2,
      progressBarStep: stepName.instantQuote1,
    },
    {
      stepName: stepName.instantQuote3,
      progressBarStep: stepName.instantQuote1,
    },
    {
      stepName: stepName.instantQuote4,
      progressBarStep: stepName.instantQuote1,
    },
    {
      stepName: stepName.approvedQuote,
      progressBarStep: stepName.approvedQuote,
    },
    {
      stepName: stepName.marketingPreferences,
      progressBarStep: stepName.approvedQuote,
    },
    { stepName: stepName.createUser, progressBarStep: stepName.approvedQuote },
    {
      stepName: stepName.aboutYourBusiness1,
      progressBarStep: stepName.aboutYourBusiness1,
    },
    {
      stepName: stepName.aboutYourBusiness2,
      progressBarStep: stepName.aboutYourBusiness1,
    },
    { stepName: stepName.moreAboutYou, progressBarStep: stepName.moreAboutYou },
    {
      stepName: stepName.idVerification,
      progressBarStep: stepName.idVerification,
    },
    {
      stepName: stepName.bankDetails,
      progressBarStep: stepName.idVerification,
    },
    { stepName: stepName.summary, excludeModules: ["ProgressBar"] },
    { stepName: stepName.offer, excludeModules: ["ProgressBar"] },
  ],
  theme,
  updateUserFields: {
    email: "applicant.email",
    password: "userManagement.createUser.password",
  },
  caseMap: {
    custom: {
      clcmState: "custom.clcmState",
      currentStep: "custom.currentStep",
    },
  },
  widgetsConfig: {
    custom: {
      initialRequestedAmount: {
        LIMITED_COMPANY: {
          validationRules: "required|numeric|min:2000|max:60000",
          customErrorMessage: {
            required: "REQUIRED",
            numeric: "NUMERIC",
            min: "MIN_AMOUNT",
            max: "MAX_AMOUNT",
          },
          formattingOptions: amountFormattingOptions,
        },
        SOLE_TRADER: {
          validationRules: "required|numeric|min:2000|max:60000",
          customErrorMessage: {
            required: "REQUIRED",
            numeric: "NUMERIC",
            min: "MIN_AMOUNT",
            max: "MAX_AMOUNT",
          },
          formattingOptions: amountFormattingOptions,
        },
      },
      initialRequestedTerm: {
        LIMITED_COMPANY: {
          validationRules: "required|numeric|min:12|max:60",
          customErrorMessage: {
            required: "REQUIRED",
            numeric: "NUMERIC",
            min: "MIN_AMOUNT",
            max: "MAX_AMOUNT",
          },
          formattingOptions: termFormatOptions,
        },
        SOLE_TRADER: {
          validationRules: "required|numeric|min:12|max:60",
          customErrorMessage: {
            required: "REQUIRED",
            numeric: "NUMERIC",
            min: "MIN_AMOUNT",
            max: "MAX_AMOUNT",
          },
          formattingOptions: termFormatOptions,
        },
      },
    },
    applicant: {
      idVerification: {
        desktop: {
          checkStatusInterval: { seconds: 5 },
          phone: {
            validationRules: "required|max:15|phone:GB",
            customErrorMessage: {
              regex: "PHONE_VALID",
              required: "REQUIRED",
              max: "MAX",
              phone: "PHONE_VALID",
            },
          },
        },
        mobile: {
          requestPhotos: ["front", "selfie", "back"],
        },
      },
      custom: {
        nationalityCountries: {
          validationRules: "required|validNationalities",
          customErrorMessage: {
            required: "REQUIRED",
            validNationalities: "VALID_NATIONALITIES",
          },
          values: countryList,
        },
        birthCountry: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
          values: countryList,
          defaultValue: "United Kingdom",
        },
        bankAccountName: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
        },
        bankAccountNumber: {
          validationRules: "required|integer|digits:8",
          customErrorMessage: {
            required: "REQUIRED",
            integer: "NUMERIC",
            digits: "DIGITS",
          },
          formattingOptions: digitsFormatingOptions,
        },
        bankSortCode: {
          validationRules: "required|integer|digits:6",
          customErrorMessage: {
            required: "REQUIRED",
            integer: "NUMERIC",
            digits: "DIGITS",
          },
          formattingOptions: digitsFormatingOptions,
        },
        consentSoftCheck: {
          defaultValue: false,
          validationRules: "accepted",
          customErrorMessage: {
            accepted: "REQUIRED",
          },
        },
        consentFunding: {
          defaultValue: false,
          validationRules: "accepted",
          customErrorMessage: {
            accepted: "REQUIRED",
          },
        },
        fullName: {
          firstName: {
            validationRules: "required|min:2|max:100|regex:/^[a-zA-Z '-]*$/",
            customErrorMessage: {
              required: "REQUIRED",
              min: "MIN",
              max: "MAX",
              regex: "INPUT",
            },
          },
          lastName: {
            validationRules: "required|min:2|max:100|regex:/^[a-zA-Z '-]*$/",
            customErrorMessage: {
              required: "REQUIRED",
              min: "MIN",
              max: "MAX",
              regex: "INPUT",
            },
          },
        },
        currentAddress: {
          validationRules: "required|address",
          customErrorMessage: {
            required: "REQUIRED_ADDRESS",
            address: "ADDRESS",
          },
          policyField: "loanee.typeOfBusiness",
          lastLineManualEditing: true,
          firstLineLookup: false,
          manualAddress: {
            line1: {
              validationRules: "required|max:255|validUKAddress",
              customErrorMessage: {
                required: "REQUIRED_LINE1",
                validUKAddress: "VALID_UK_ADDRESS",
                max: "MAX",
              },
            },
            line2: {
              validationRules: "max:255|validUKAddress",
              customErrorMessage: {
                validUKAddress: "VALID_UK_ADDRESS",
                max: "MAX",
              },
            },
            line3: {
              validationRules: "max:255|validUKAddress",
              customErrorMessage: {
                validUKAddress: "VALID_UK_ADDRESS",
                max: "MAX",
              },
            },
            town: {
              validationRules: "required|max:35|validUKCityName",
              customErrorMessage: {
                required: "REQUIRED_TOWN",
                validUKCityName: "VALID_UK_CITY_NAME",
                max: "MAX",
              },
            },
            postcode: {
              validationRules: "required|min:5|validUkPostcode",
              customErrorMessage: {
                validUkPostcode: "VALID_UK_POSTCODE",
                required: "REQUIRED_POSTCODE",
                min: "VALID_UK_POSTCODE_LENGTH",
              },
            },
          },
        },
        dateCurrentAddress: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
        },
        datesPreviousAddresses: [
          {
            validationRules: "required",
            customErrorMessage: {
              required: "REQUIRED",
            },
          },
        ],
        previousAddresses: [
          {
            validationRules: "required|address",
            customErrorMessage: {
              required: "REQUIRED_ADDRESS",
              address: "ADDRESS",
            },
            firstLineLookup: false,
            policyField: "loanee.typeOfBusiness",
            lastLineManualEditing: true,
            manualAddress: {
              line1: {
                validationRules: "required|max:255|validUKAddress",
                customErrorMessage: {
                  required: "REQUIRED_LINE1",
                  validUKAddress: "VALID_UK_ADDRESS",
                  max: "MAX",
                },
              },
              line2: {
                validationRules: "max:255|validUKAddress",
                customErrorMessage: {
                  validUKAddress: "VALID_UK_ADDRESS",
                  max: "MAX",
                },
              },
              line3: {
                validationRules: "max:255|validUKAddress",
                customErrorMessage: {
                  validUKAddress: "VALID_UK_ADDRESS",
                  max: "MAX",
                },
              },
              town: {
                validationRules: "required|max:35|validUKCityName",
                customErrorMessage: {
                  required: "REQUIRED_TOWN",
                  validUKCityName: "VALID_UK_CITY_NAME",
                  max: "MAX",
                },
              },
              postcode: {
                validationRules: "required|validUkPostcode",
                customErrorMessage: {
                  validUkPostcode: "VALID_UK_POSTCODE",
                  required: "REQUIRED_POSTCODE",
                },
              },
            },
          },
          {
            validationRules: "address",
            firstLineLookup: false,
            customErrorMessage: {
              required: "REQUIRED_ADDRESS",
              address: "ADDRESS",
            },
            policyField: "loanee.typeOfBusiness",
            lastLineManualEditing: true,
            manualAddress: {
              line1: {
                validationRules: "required|max:255|validUKAddress",
                customErrorMessage: {
                  required: "REQUIRED_LINE1",
                  validUKAddress: "VALID_UK_ADDRESS",
                  max: "MAX",
                },
              },
              line2: {
                validationRules: "required|max:255|validUKAddress",
                customErrorMessage: {
                  required: "REQUIRED_LINE2",
                  validUKAddress: "VALID_UK_ADDRESS",
                  max: "MAX",
                },
              },
              line3: {
                validationRules: "required|max:255|validUKAddress",
                customErrorMessage: {
                  required: "REQUIRED_LINE3",
                  validUKAddress: "VALID_UK_ADDRESS",
                  max: "MAX",
                },
              },
              town: {
                validationRules: "required|max:35|validUKCityName",
                customErrorMessage: {
                  required: "REQUIRED_TOWN",
                  validUKCityName: "VALID_UK_CITY_NAME",
                  max: "MAX",
                },
              },
              postcode: {
                validationRules: "required|validUkPostcode",
                customErrorMessage: {
                  validUkPostcode: "VALID_UK_POSTCODE",
                  required: "REQUIRED_POSTCODE",
                },
              },
            },
          },
          {
            validationRules: "address",
            firstLineLookup: false,
            customErrorMessage: {
              required: "REQUIRED_ADDRESS",
              address: "ADDRESS",
            },
            policyField: "loanee.typeOfBusiness",
            lastLineManualEditing: true,
            manualAddress: {
              line1: {
                validationRules: "required|max:255|validUKAddress",
                customErrorMessage: {
                  required: "REQUIRED_LINE1",
                  validUKAddress: "VALID_UK_ADDRESS",
                  max: "MAX",
                },
              },
              line2: {
                validationRules: "required|max:255|validUKAddress",
                customErrorMessage: {
                  required: "REQUIRED_LINE2",
                  validUKAddress: "VALID_UK_ADDRESS",
                  max: "MAX",
                },
              },
              line3: {
                validationRules: "required|max:255|validUKAddress",
                customErrorMessage: {
                  required: "REQUIRED_LINE3",
                  validUKAddress: "VALID_UK_ADDRESS",
                  max: "MAX",
                },
              },
              town: {
                validationRules: "required|max:35|validUKCityName",
                customErrorMessage: {
                  required: "REQUIRED_TOWN",
                  validUKCityName: "VALID_UK_CITY_NAME",
                  max: "MAX",
                },
              },
              postcode: {
                validationRules: "required|validUkPostcode",
                customErrorMessage: {
                  validUkPostcode: "VALID_UK_POSTCODE",
                  required: "REQUIRED_POSTCODE",
                },
              },
            },
          },
        ],
        taxHomeCountry: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
          values: countryList,
          defaultValue: "United Kingdom",
        },
      },
      birthDate: {
        validationRules: `required|regex:/^\\d{2}\\/\\d{2}\\/\\d{4}$/|validateValidDate|validateMinAge:18|validateMaxAge:100`,
        customErrorMessage: {
          required: "REQUIRED",
          regex: "VALID_DATE_FORMAT",
          validateValidDate: "FORMAT_VALID_DATE",
          validateMinAge: "FORMAT_MIN_AGE",
          validateMaxAge: "FORMAT_MAX_AGE",
        },
        minAge: 0,
        maxAge: 100,
        dateFormat: "DD/MM/YYYY",
      },
      email: {
        validationRules: "required|email",
        customErrorMessage: {
          required: "REQUIRED",
          email: "VALID_EMAIL",
          min: "MIN",
        },
        inputProps: { autoComplete: "false", type: "email" },
      },
      fullName: {
        title: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
          values: title,
        },
        firstName: {
          validationRules: "required|min:2|max:100|regex:/^[a-zA-Z -]*$/",
          customErrorMessage: {
            required: "REQUIRED",
            min: "MIN",
            max: "MAX",
            regex: "INPUT",
          },
        },
        middleName: {
          validationRules: "max:100|regex:/^[a-zA-Z -]*$/",
          customErrorMessage: {
            max: "MAX",
            validSurname: "INPUT",
          },
        },
        lastName: {
          validationRules: "required|min:2|max:100|validSurname",
          customErrorMessage: {
            required: "REQUIRED",
            min: "MIN",
            max: "MAX",
            validSurname: "INPUT",
          },
        },
      },
      mobile: {
        phone: {
          validationRules: "required|max:15|phone:GB",
          customErrorMessage: {
            regex: "PHONE_VALID",
            required: "REQUIRED",
            max: "MAX",
            phone: "PHONE_VALID",
          },
        },
        authentication: {
          validationRules: "max:6|required|regex:/^\\d+$/",
          customErrorMessage: {
            regex: "INPUT",
            required: "REQUIRED",
            max: "MAX",
          },
        },
      },
      propertyStatus: {
        validationRules: "required",
        customErrorMessage: {
          required: "REQUIRED",
        },
        values: propertyStatusList,
      },
      otherOwnedProperties: [
        {
          validationRules: "required|address",
          customErrorMessage: {
            required: "REQUIRED_ADDRESS",
            address: "ADDRESS",
          },
          firstLineLookup: false,
          policyField: "loanee.typeOfBusiness",
          lastLineManualEditing: true,
          manualAddress: {
            line1: {
              validationRules: "required|max:100",
              customErrorMessage: {
                required: "REQUIRED_LINE1",
              },
            },
            line2: { validationRules: "max:999" },
            line3: { validationRules: "max:999" },
            town: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_TOWN",
              },
            },
            country: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_COUNTRY",
              },
            },
          },
        },
        {
          validationRules: "address",
          customErrorMessage: {
            required: "REQUIRED_ADDRESS",
            address: "ADDRESS",
          },
          policyField: "loanee.typeOfBusiness",
          lastLineManualEditing: true,
          manualAddress: {
            line1: {
              validationRules: "required|max:100",
              customErrorMessage: {
                required: "REQUIRED_LINE1",
              },
            },
            line2: { validationRules: "max:999" },
            line3: { validationRules: "max:999" },
            town: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_TOWN",
              },
            },
            country: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_COUNTRY",
              },
            },
          },
        },
        {
          validationRules: "address",
          customErrorMessage: {
            required: "REQUIRED_ADDRESS",
            address: "ADDRESS",
          },
          policyField: "loanee.typeOfBusiness",
          lastLineManualEditing: true,
          manualAddress: {
            line1: {
              validationRules: "required|max:100",
              customErrorMessage: {
                required: "REQUIRED_LINE1",
              },
            },
            line2: { validationRules: "max:999" },
            line3: { validationRules: "max:999" },
            town: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_TOWN",
              },
            },
            country: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_COUNTRY",
              },
            },
          },
        },
      ],
    },
    loanee: {
      custom: {
        primarySIC: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
        },
        annualRevenue: {
          LIMITED_COMPANY: {
            validationRules: "required",
            customErrorMessage: {
              required: "REQUIRED",
            },
            values: annualRevenueList,
            // validationRules: 'required|numeric|min:15000|max:43000000',
            // customErrorMessage: {
            //     required: 'REQUIRED',
            //     numeric: 'NUMERIC',
            //     min: 'MIN_AMOUNT',
            //     max: 'MAX_AMOUNT',
            // },
            // formattingOptions: currencyFormattingOptions,
            // inputProps: { type: 'currency' }
          },
          SOLE_TRADER: {
            validationRules: "required",
            customErrorMessage: {
              required: "REQUIRED",
            },
            values: annualRevenueList,
            // validationRules: 'required|numeric|max:999999999',
            // customErrorMessage: {
            //     required: 'REQUIRED',
            //     numeric: 'NUMERIC',
            //     max: 'MAX_AMOUNT',
            // },
            // formattingOptions: currencyFormattingOptions,
            // inputProps: { type: 'currency' },
          },
        },
        // TODO: Add validation when PO provide clear rules
        numberOfEmployees: {
          LIMITED_COMPANY: {
            validationRules: "required",
            customErrorMessage: {
              required: "REQUIRED",
            },
            values: numberOfEmployeesListLIMITED_COMPANY,
          },
          SOLE_TRADER: {
            validationRules: "required",
            customErrorMessage: {
              required: "REQUIRED",
            },
            values: numberOfEmployeesListSOLE_TRADER,
          },
        },
        balanceSheet: {
          LIMITED_COMPANY: {
            validationRules: "required",
            customErrorMessage: {
              required: "REQUIRED",
            },
            values: balanceSheetLIMITED_COMPANY,
          },
          SOLE_TRADER: {
            validationRules: "required",
            customErrorMessage: {
              required: "REQUIRED",
            },
            values: balanceSheeteList_SOLE_TRADER,
          },
        },
        cashPercentage: {
          validationRules: "required|integer|between:0,100",
          customErrorMessage: {
            required: "REQUIRED",
            between: "BETWEEN",
          },
          formattingOptions: percentageFormatOptions,
        },
        sourceOfIncome: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
          values: sourceOfIncomeList,
        },
        suppliersCountries: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
          values: countryList.filter((c) => c.value !== "United Kingdom"),
        },
        tradingName: {
          validationRules: "required|validTradingName",
          customErrorMessage: {
            required: "REQUIRED",
            validTradingName: "VALID_TRADING_NAME",
          },
        },
        tradingCountries: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
          values: countryList.filter((c) => c.value !== "United Kingdom"),
        },
        tradingAddress: {
          firstLineLookup: false,
          validationRules: "required|address",
          customErrorMessage: {
            required: "REQUIRED_ADDRESS",
            address: "ADDRESS",
          },
          lastLineManualEditing: true,
          policyField: "loanee.typeOfBusiness",
          manualAddress: {
            line1: {
              validationRules: "required|max:255|validUKAddress",
              customErrorMessage: {
                required: "REQUIRED_LINE1",
                validUKAddress: "VALID_UK_ADDRESS",
                max: "MAX",
              },
            },
            line2: {
              validationRules: "max:255|validUKAddress",
              customErrorMessage: {
                validUKAddress: "VALID_UK_ADDRESS",
                max: "MAX",
              },
            },
            line3: {
              validationRules: "max:255|validUKAddress",
              customErrorMessage: {
                validUKAddress: "VALID_UK_ADDRESS",
                max: "MAX",
              },
            },
            town: {
              validationRules: "required|max:35|validUKCityName",
              customErrorMessage: {
                required: "REQUIRED_TOWN",
                validUKCityName: "VALID_UK_CITY_NAME",
                max: "MAX",
              },
            },
            postcode: {
              validationRules: "required|validUkPostcode",
              customErrorMessage: {
                validUkPostcode: "VALID_UK_POSTCODE",
                required: "REQUIRED_POSTCODE",
              },
            },
          },
        },
        businessPhone: {
          validationRules: "required|max:15|phone:GB",
          customErrorMessage: {
            required: "REQUIRED",
            max: "MAX",
            phone: "PHONE_VALID",
          },
        },
      },
      typeOfBusiness: {
        validationRules: "required",
        values: typeOfBusiness,
        customErrorMessage: {
          required: "REQUIRED",
          alpha: "ALPHA_BUSINESS_TYPE",
        },
      },
      name: {
        validationRules: "min:3|required|max:255",
        customErrorMessage: {
          required: "REQUIRED",
          min: "MIN",
          max: "MAX",
          includes: "INCLUDES_COMPANY",
        },
      },
      identifier: {
        validationRules: "required",
        customErrorMessage: {
          required: "SELECT_COMPANY",
        },
      },
      companyNameNumber: {
        lastLineManualEditing: false,
        validationRules: "required|min:2|max:255",
        customErrorMessage: {
          required: "REQUIRED",
          min: "MIN",
          max: "MAX",
        },
        manualNameNumber: {
          name: {
            validationRules: "required|min:2|max:255",
            customErrorMessage: {
              required: "REQUIRED",
              min: "MIN",
              max: "MAX",
            },
          },
        },
      },
      businessAddressSelector: {
        defaultValue: false,
      },
      businessAddress: {
        LIMITED_COMPANY: {
          validationRules: "required|address",
          customErrorMessage: {
            required: "REQUIRED_ADDRESS",
            address: "ADDRESS",
          },
          lastLineManualEditing: true,
          policyField: "loanee.typeOfBusiness",
          manualAddress: {
            line1: {
              validationRules: "required|max:100",
              customErrorMessage: {
                required: "REQUIRED_LINE1",
              },
            },
            line2: { validationRules: "max:999" },
            line3: { validationRules: "max:999" },
            town: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_TOWN",
              },
            },
            country: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_COUNTRY",
              },
            },
          },
        },
        SOLE_TRADER: {
          validationRules: "required|address",
          customErrorMessage: {
            required: "REQUIRED_ADDRESS",
            address: "ADDRESS",
          },
          lastLineManualEditing: true,
          policyField: "loanee.typeOfBusiness",
          manualAddress: {
            line1: {
              validationRules: "required|max:100",
              customErrorMessage: {
                required: "REQUIRED_LINE1",
              },
            },
            line2: { validationRules: "max:999" },
            line3: { validationRules: "max:999" },
            town: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_TOWN",
              },
            },
            country: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_COUNTRY",
              },
            },
          },
        },
      },
      annualNetProfitBeforeTax: {
        LIMITED_COMPANY: {
          validationRules: "required|numeric|min:1",
          customErrorMessage: {
            required: "REQUIRED",
            numeric: "NUMERIC",
            min: "MIN_AMOUNT",
            max: "MAX_AMOUNT",
          },
          inputProps: { type: "currency" },
          formattingOptions: currencyFormattingOptions,
        },
        SOLE_TRADER: {
          validationRules: "required|numeric",
          customErrorMessage: {
            required: "REQUIRED",
            numeric: "NUMERIC",
            min: "MIN_AMOUNT",
            max: "MAX_AMOUNT",
          },
          inputProps: { type: "currency" },
          formattingOptions: currencyFormattingOptions,
        },
      },
      monthlyDebtRepayments: {
        LIMITED_COMPANY: {
          validationRules: "numeric",
          customErrorMessage: {
            numeric: "NUMERIC",
          },
          inputProps: { type: "currency" },
          formattingOptions: currencyFormattingOptions,
        },
        SOLE_TRADER: {
          validationRules: "required|numeric|max:999999999",
          customErrorMessage: {
            required: "REQUIRED",
            numeric: "NUMERIC",
            max: "MAX_AMOUNT",
          },
          inputProps: { type: "currency" },
          formattingOptions: currencyFormattingOptions,
        },
      },
      minAnnualDirectorDividends: {
        validationRules: "numeric",
        customErrorMessage: {
          numeric: "NUMERIC",
          max: "MAX_AMOUNT",
        },
        inputProps: { type: "currency" },
        formattingOptions: currencyFormattingOptions,
      },
      annualDrawings: {
        validationRules: "required|numeric|max:999999999",
        customErrorMessage: {
          required: "REQUIRED",
          numeric: "NUMERIC",
          max: "MAX_AMOUNT",
        },
        inputProps: { type: "currency" },
        formattingOptions: currencyFormattingOptions,
      },
      tradingActivity: {
        validationRules: "required|string",
        customErrorMessage: {
          required: "REQUIRED",
          string: "SELECT_FROM_LIST",
        },
        values: tradingActivityList,
      },
    },
    loanRequest: {
      loanPurpose: {
        LIMITED_COMPANY: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
          values: loanPurposeList_LIMITED_COMPANY,
        },
        SOLE_TRADER: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
          values: loanPurposeList_SOLE_TRADER,
        },
      },
      otherLoanPurpose: {
        validationRules: "required|lettersOnly|min:3|max:100",
        customErrorMessage: {
          required: "REQUIRED",
          lettersOnly: "LETTERS_ONLY",
          min: "MIN",
          max: "MAX",
        },
      },
      amount: {
        LIMITED_COMPANY: {
          defaultValue: undefined,
          min: 2000,
          max: 60000,
          step: 100,
          valueFieldModifiers: false,
          sliderModifiers: true,
          inputFormattingOptions: currencyMaxRangeFormattingOptions,
          formattingOptions: currencyMaxRangeFormattingOptions,
          inputProps: { type: "currency" },
        },
        SOLE_TRADER: {
          defaultValue: undefined,
          min: 2000,
          max: 60000,
          step: 100,
          valueFieldModifiers: false,
          sliderModifiers: true,
          inputFormattingOptions: currencyMaxRangeFormattingOptions,
          formattingOptions: currencyMaxRangeFormattingOptions,
          inputProps: { type: "currency" },
        },
      },
      term: {
        LIMITED_COMPANY: {
          defaultValue: undefined,
          min: 12,
          max: 60,
          step: 1,
          valueFieldModifiers: false,
          sliderModifiers: true,
          inputFormattingOptions: termFormatOptions,
        },
        SOLE_TRADER: {
          defaultValue: undefined,
          min: 12,
          max: 60,
          step: 6,
          valueFieldModifiers: false,
          sliderModifiers: true,
        },
      },
      separateTerm: {
        validationRules: "required",
        step: 1,
        valueFieldModifiers: false,
        sliderModifiers: true,
        inputFormattingOptions: termFormatOptions,
      },
      separateAmount: {
        validationRules: "required",
        valueFieldModifiers: true,
        sliderModifiers: true,
        formattingOptions: currencyFormattingAmountOptions,
        inputProps: { type: "currency" },
      },
    },
    latestOffer: {},
    userManagement: {
      createUser: {
        password: {
          validationRules: "required|max:60|validPassword",
          customErrorMessage: {
            required: "REQUIRED",
            validPassword: "VALID_PASSWORD",
            max: "MAX_PASSWORD",
          },
          inputProps: {
            type: "password",
            autoComplete: "New password",
          },
        },
        confirmPassword: {
          validationRules: "required|max:60|validPassword",
          customErrorMessage: {
            required: "REQUIRED",
            validPassword: "VALID_PASSWORD",
            max: "MAX_PASSWORD",
          },
        },
      },
    },
    login: {
      username: {
        validationRules: "required|email",
        customErrorMessage: {
          email: "VALID_EMAIL",
          required: "REQUIRED",
        },
        inputProps: { autoComplete: "false" },
      },
      password: {
        validationRules: "required|max:60|validPassword",
        customErrorMessage: {
          required: "REQUIRED",
          validPassword: "VALID_PASSWORD",
          max: "MAX_PASSWORD",
        },
        inputProps: { type: "password" },
      },
    },
    forgotPassword: {
      email: {
        validationRules: "required|email",
        customErrorMessage: {
          email: "VALID_EMAIL",
          required: "REQUIRED",
        },
        inputProps: { autoComplete: "false", type: "email" },
      },
    },
    createPassword: {
      password: {
        validationRules: "required|max:60|validPassword",
        customErrorMessage: {
          required: "REQUIRED",
          validPassword: "VALID_PASSWORD",
          max: "MAX_PASSWORD",
        },
        inputProps: { type: "password" },
      },
    },
    officers: {
      showNextButton: false,
      fraudIncludeThisIsMeShareholders: true,
      fraudIncludeNotActiveShareholders: true,
      type: "SHAREHOLDERS",
      personDetails: {
        address: {
          validationRules: "required|address",
          customErrorMessage: {
            required: "REQUIRED_ADDRESS",
            address: "ADDRESS",
          },
          policyField: "loanee.typeOfBusiness",
          lastLineManualEditing: true,
          manualAddress: {
            line1: {
              validationRules: "required|max:100",
              customErrorMessage: {
                required: "REQUIRED_LINE1",
              },
            },
            line2: { validationRules: "max:999" },
            line3: { validationRules: "max:999" },
            town: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_TOWN",
              },
            },
            country: {
              validationRules: "required",
              customErrorMessage: {
                required: "REQUIRED_COUNTRY",
              },
            },
          },
        },
        birthDate: {
          validationRules: `required`,
          customErrorMessage: {
            date: "DATE",
            required: "REQUIRED",
          },
        },
        email: {
          validationRules: "required|email",
          customErrorMessage: {
            email: "VALID_EMAIL",
            required: "REQUIRED",
          },
          inputProps: { autoComplete: "false", type: "email" },
        },
        fullName: {
          firstName: {
            validationRules: "required|min:2|max:100|regex:/^[a-zA-Z '-]*$/",
            customErrorMessage: {
              required: "REQUIRED",
              min: "MIN",
              max: "MAX",
              regex: "INPUT",
            },
          },
          middleName: {
            validationRules: "max:100|regex:/^[a-zA-Z '-]*$/",
            customErrorMessage: {
              max: "MAX",
              regex: "INPUT",
            },
          },
          lastName: {
            validationRules: "required|min:2|max:100|regex:/^[a-zA-Z '-]*$/",
            customErrorMessage: {
              required: "REQUIRED",
              min: "MIN",
              max: "MAX",
              regex: "INPUT",
            },
          },
        },
      },
    },
    meta: {
      consents: {
        privacyNote: {
          defaultValue: false,
          validationRules: "accepted",
          customErrorMessage: {
            accepted: "REQUIRED",
          },
        },
        termsAndConditions: {
          defaultValue: false,
          validationRules: "accepted",
          customErrorMessage: {
            accepted: "REQUIRED",
          },
        },
        authorizedDirector: {
          defaultValue: false,
          validationRules: "accepted",
          customErrorMessage: {
            checkbox: "REQUIRED",
          },
        },
        personalGuarantee: {
          defaultValue: false,
          validationRules: "accepted",
          customErrorMessage: {
            checkbox: "REQUIRED",
          },
        },
      },
      communicationOptions: {},
      keepInformed: {},
    },
    vatStatement: {
      upload: {
        maxFiles: 30,
        maxSize: 52428800, //50 MB
        fileExtensions: ["pdf"],
        type: "VAT",
      },
    },
    accountScoreStatement: {
      upload: {
        maxFiles: 30,
        maxSize: 52428800, // 50 MB
        fileExtensions: [
          "pdf",
          "doc",
          "docx",
          "odt",
          "rtf",
          "ppt",
          "pptx",
          "odp",
          "xls",
          "xlsx",
          "ods",
          "txt",
          "csv",
          "xml",
          "xhtml",
          "mht",
          "msg",
          "eml",
          "bpm",
          "jpg",
          "jpeg",
          "png",
        ],
        type: "BANK",
      },
    },
    bankAccountStatement: {
      linkAccountDetails: {
        displayIcons: [
          "HSBC",
          "Barclays",
          "Lloyds",
          "RBS",
          "Santander",
          "NatWest",
          "Dag",
          "Halifax",
          "NationWide",
        ],
      },
      upload: {
        maxFiles: 30,
        maxSize: 52428800, // 50 MB
        fileExtensions: [
          "pdf",
          "doc",
          "docx",
          "odt",
          "rtf",
          "ppt",
          "pptx",
          "odp",
          "xls",
          "xlsx",
          "ods",
          "txt",
          "csv",
          "xml",
          "xhtml",
          "mht",
          "msg",
          "eml",
          "bpm",
          "jpg",
          "jpeg",
          "png",
        ],
        type: "BANK",
      },
    },
    financialAccountsStatement: {
      linkAccountDetails: {
        displayIcons: [
          "sage 50",
          "sage 200",
          "sage 300",
          "xero partner",
          "dynamics-gp",
          "navision",
          "quickbooks",
          "quickbooks-online",
          "free agent",
        ],
      },
      upload: {
        maxFiles: 30,
        maxSize: 52428800, // 50 MB
        fileExtensions: [
          "pdf",
          "doc",
          "docx",
          "odt",
          "rtf",
          "ppt",
          "pptx",
          "odp",
          "xls",
          "xlsx",
          "ods",
          "txt",
          "csv",
          "xml",
          "xhtml",
          "mht",
          "msg",
          "eml",
          "bpm",
          "jpg",
          "jpeg",
          "png",
        ],
        type: "OTHER",
      },
    },
    eCommerce: {
      paypal: {
        type: "paypal",
      },
      ebay: {
        type: "ebay",
      },
      amazon: {
        type: "amazon",
      },
    },
    linkAccount: {
      paypal: {
        type: "instructionsAndTab",
        contentType: "paypal",
        linkedService: "paypal",
        accountType: "paypal",
        serviceName: "generate-login-url",
      },
      ebay: {
        type: "instructionsAndTab",
        contentType: "ebay",
        linkedService: "ebay",
        accountType: "ebay",
        serviceName: "generate-login-url",
      },
      amazon: {
        type: "amazon",
        contentType: "amazon",
        linkedService: "amazon",
        accountType: "amazon",
        serviceName: "link",
        sellerId: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
        },
        marketplaceId: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
        },
        authorizationToken: {
          validationRules: "required",
          customErrorMessage: {
            required: "REQUIRED",
          },
        },
      },
    },
    decision: {
      decisionPolicy: "v2",
      minimumRequirements: [
        // { widgetName: 'vatStatement.upload', minimum: 0 },
        // { widgetName: 'bankAccountStatement.linkAccountDetails', minimum: 0 },
        // { widgetName: 'bankAccountStatement.upload', minimum: 0 },
        // { widgetName: 'financialAccountsStatement.linkAccountDetails', minimum: 0 },
        // { widgetName: 'financialAccountsStatement.upload', minimum: 0 },
        // { widgetName: 'accountScoreStatement.upload', minimum: 0 },
        // { widgetName: 'accountScoreStatement.linkAccountDetails', minimum: 0 },
        // { widgetName: 'eCommerce.paypal', minimum: 0 },
        // { widgetName: 'eCommerce.ebay', minimum: 0 },
        // { widgetName: 'eCommerce.amazon', minimum: 0 },
      ],
      minimumMarketPlaceItems: 0,
      waitTime: { seconds: 60 }, // Use moment docs for formatting -  https://momentjs.com/docs/#/durations/
    },
    popupLoader: {
      type: "ball-pulse",
    },
  },
  googleTagManager: {
    gtmId: "GTM-WS8FGWH",
    allowedTracking: {
      VirtualPageview: ["Step", "Page"],
      InputTracking: ["onFocus", "onBlur", "checkboxClick"],
      ButtonTracking: ["onClick", "tooltipClick"],
    },
  },
  languages: {
    defaultLanguage: "en",
    fallbackLanguage: "en",
    languageList: {
      en: { translation: enLanguage },
    },
  },
  environments: {
    appHost: "app.ezbob.com",
  },
  custom: {
    nationalitiesCount: 2,
  },
};

export default config;