export const calculateAPR = (loanamount, numpayments, baseannualrate, costs) => {
  /*
    By Paul Cormier - Sep 10, 2010 - <a class="vglnk" href="http://webmasterymadesimple.com" rel="nofollow"><span>http</span><span>://</span><span>webmasterymadesimple</span><span>.</span><span>com</span></a>
    loanamount     = the amount borrowed
    numpayments    = number of monthly payments e.g. 30 years = 360
    baserate    = the base percentage rate of the loan. A 5.25% Annual Rate should be passed in as 0.0525 NOT 5.25
    costs        = the loan closing costs e.g. origination fee, broker fees, etc.
    */
  const rate = baseannualrate / 12;
  const ratePowPayments = Math.pow(1 + rate, numpayments);
  const totalMonthlyPayment =
    ((loanamount + costs) * rate * ratePowPayments) / (ratePowPayments - 1);
  let testrate = rate;
  let iteration = 1;
  let testresult = 0;

  //iterate until result = 0
  let testdiff = testrate;
  while (iteration <= 100) {
    testresult =
      (testrate * Math.pow(1 + testrate, numpayments)) / (Math.pow(1 + testrate, numpayments) - 1) -
      totalMonthlyPayment / loanamount;

    if (Math.abs(testresult) < 0.0000001) break;

    if (testresult < 0) {
      testrate += testdiff;
    } else {
      testrate -= testdiff;
    }

    testdiff /= 2;
    iteration += 1;
  }

  testrate *= 12;

  return testrate.toFixed(6);
};
