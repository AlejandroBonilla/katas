//https://www.codewars.com/kata/563f037412e5ada593000114/solutions/javascript
// Let P be the Principal = 1000.00      
// Let I be the Interest Rate = 0.05      
// Let T be the Tax Rate = 0.18      
// Let D be the Desired Sum = 1100.00


// After 1st Year -->
// P = 1041.00
// After 2nd Year -->
// P = 1083.86
// After 3rd Year -->
// P = 1128.30

// Thus Mr. Scrooge has to wait for 3 years for the initial pricipal to ammount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumptions : Assume that Desired Principal 'D' is always greater than the initial principal, however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

const calculateGain = (principal ,interest_rate,tax_rate, desired_sum,cont)=>{
  let gainMoney = principal * interest_rate
  let money = (principal+gainMoney)
  let taxToPay = (gainMoney * tax_rate)
  let realMoney = money - taxToPay

  ++cont
  if(principal === desired_sum) return 0
  return (realMoney < desired_sum)?
    calculateGain(realMoney,interest_rate,tax_rate,desired_sum,cont)
    :
    cont
}

function calculateYears(principal, interest, tax, desired_sum) {
  let cont = 0
  return calculateGain(principal, interest, tax, desired_sum,cont)
  
}


console.log(calculateYears(1000, 0.05, 0.15, 1500))
console.log(calculateYears(1000, 0.05, 0.18, 1100), 3)
console.log(calculateYears(1000,0.01625,0.18,1200), 14)
console.log(calculateYears(1000,0.05,0.18,1000), 0)