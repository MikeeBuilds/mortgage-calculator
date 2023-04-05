import React from 'react'

const Result = ({data}) => {

  const {home} = data;

  console.log(data.downPayment);
  console.log(data.loanAmount);
  return (
    <div>Result</div>
  )
}

export default Result