import React from 'react'

const Result = ({data}) => {

  const {homeValue, downPayment, loanAmount, loanTerm, interestRate} = data;

  const totalLoanMonths = loanTerm * 12; // 60 months = 5 years
  const 

  return (
    <div>Result</div>
  )
}

export default Result