//https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript
//https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

const tripledouble= function(num1,num2){
	const n1 = findTB(222333555)
  
  const n2 = findDB(41177722899)
  
	n1 
	n2
	return n1
	return (n1 && n2 ) ?  1 : 0
}
const findTB = (num)=>{
	let numArr = String(num).split('')
	var contTriple = 0
	var tripleFound = false
	var arrTriple = []
	var arrStart = []
	numArr.forEach((n,index)=>{
		if(index === 0) {
			contTriple = 1
		}
		else
		{
			if(n === numArr[index-1]) {
				contTriple=contTriple +1
			}
			else
			{
				contTriple = 1
			}
		}

		if(contTriple === 3) {
			tripleFound = true
			var numberString= ''
			var start = arrStart.slice(-1).pop() //get last value
			if(start === undefined){
				start = 0
			}
			for(i=start ; i<=index ; i++){
				numberString = numberString.concat(numArr[i])
			}
			arrTriple.push(numberString)
			numberString=''
			arrStart.push(index+1)//adjust index for start 
			contTriple = 1
		}	
  })
 return passingTripleToDouble(arrTriple)
}
const findDB = (num)=>{
  // example 41177722899
    let numArr = String(num).split('')
    var contDouble = 0
    var doubleFound = false
    var arrDouble = []
    var arrStart = []
    var currentIndex = 0
    var arrEquals = []
	  numArr.forEach((n,index)=>{
      let currentNumber = null
      if(index === 0) {
        contDouble = 1
      }
      else
      {
        if(n === numArr[index-1]) {
          
          n
          index
        }
        else
        {
          
        }
      }
    })
    contDouble
    arrDouble
    arrDouble
	return arrDouble
}

const passingTripleToDouble = (arrTriple) =>{
	let arrDouble = []	
	arrTriple.forEach(element => {
		let arr = element.toString(10).split('').map(number=>number)
		let double = ''
		for(i=0; i<2; i++){
			double = double.concat(arr[i])
		}
		arrDouble.push(double)
	});
	return arrDouble
}

console.log(passingTripleToDouble([222,333,444]))
console.log(tripledouble(451999277,41177722899))
// console.log(tripledouble(1222345, 12345))
// console.log(tripledouble(12345, 12345))
// console.log(tripledouble(666789, 12345667))
// console.log(tripledouble(10560002, 100))
// console.log(tripledouble(11122, 122))


