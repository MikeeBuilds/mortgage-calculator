import React from 'react'

const Result = ({data}) => {

  const {homeValue, downPayment, loanAmount, loanTerm, interestRate} = data;

  const totalLoanMonths = loanTerm * 12; // 60 months = 5 years
  const interestRatePerMonth = interestRate / 100 / 12; // 100 @ 12% for 1 year 

  const mon

  return (
    <div>Result</div>
  )
}

export default Result