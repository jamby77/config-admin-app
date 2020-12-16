export const businessType = {
  limited: 'LIMITED_COMPANY',
  undefined: 'UNDEFINED',
};

export const companyHouseBusinesType = {
  LIMITED_COMPANY: 'ltd',
};

export const clcmAction = {
  doNothing: 'intermediate',
  selectionOfBusinessType: 'selectionOfBusinessType', // Done
  rejectionCompanyType: 'rejectedBusinessTypeNotLtd', // Done
  rejectionCustomerAlreadyExist: 'rejectedloanAlreadyExists', // Has changes
  rejectionNotLimitedCompany: 'rejectedNotLimitedCompany', // Done
  rejectedMoreThan1Director: 'rejectedMoreThan1Director', // TODO: maybe modify page
  rejectedcustomerDuplication: 'rejectedCustomerDuplication', // TODO: Ask Roy for this case
  rejectionQuoteRequest: 'rejectedQuote', // Done
  rejectionFullDecision: 'rejectedFullAutoDecision', // Done
  quoteError: 'quoteError', // Done
  referral: 'referalFullDecision', // Done
  rejectedFullManualDecision: 'rejectedFullManualDecision', // EZ1
  rejectionNotSME: 'rejectedNotSME', // Done
  instantQuote1: 'instantQuote1Page', // Done
  instantQuote2: 'instantQuote2Page', // Done
  instantQuote3: 'instantQuote3Page', // Done
  instantQuote4: 'instantQuote4Page', // Done
  approvedQuote: 'approvedQuotePage', // Done
  declinedOffer: 'declinedOffer', // Done
  marketingPreferences: 'marketingPreferencesPage1', // Done
  createUser: 'createAnAccountPage', // Done
  aboutYourBusiness1: 'businessPage1', // Done
  aboutYourBusiness2: 'businessPage2', // Done
  moreAboutYou: 'moreAboutYou', // Done
  idVerification: 'selfieFlowPages', // Done
  summary: 'summaryPage', // Done
  offer: 'offerPage', // Done,
  errorQuote: 'errorQuote', // New
};

export const idvStatus = {
  verified: 'verified',
};

export const rejectionPageName = {
  rejectionCompanyType: 'rejectionCompanyType',
  rejectionNotSME: 'rejectionNotSME',
  rejectionNotLimitedCompany: 'rejectionNotLimitedCompany',
  rejectionCustomerAlreadyExist: 'rejectionCustomerAlreadyExist',
  rejectedcustomerDuplication: 'rejectedcustomerDuplication',
  rejectionQuoteRequest: 'rejectionQuoteRequest',
  rejectedMoreThan1Director: 'rejectedMoreThan1Director',
  refer: 'referral',
  rejectionFullDecision: 'rejectionFullDecision',
  rejectionQuoteError: 'quoteError',
  rejectedWrongDetails: 'rejectedWrongDetails',
  fundingOptionsReferral: 'fundingOptionsReferral',
};

export const stepName = {
  ...rejectionPageName,
  businessTypeSelection: 'businessTypeSelection',
  instantQuote1: 'instantQuote1',
  instantQuote2: 'instantQuote2',
  instantQuote3: 'instantQuote3',
  instantQuote4: 'instantQuote4',
  approvedQuote: 'approvedQuote',
  marketingPreferences: 'marketingPreferences',
  createUser: 'createUser',
  aboutYourBusiness1: 'aboutYourBusiness1',
  aboutYourBusiness2: 'aboutYourBusiness2',
  moreAboutYou: 'moreAboutYou',
  idVerification: 'idVerification',
  bankDetails: 'bankDetails',
  offer: 'offer',
  summary: 'summary',
};

export const decisionStatus = {
  approve: 'APPROVE',
  reject: 'REJECT',
  refer: 'REFER',
  error: 'ERROR',
};

export const validatorStatus = {
  valid: 'valid',
};
