// Write a function to calculate the factorial of a number.
// factorial(0) ➞ 1
// factorial(5) ➞ 120
// factorial(10) ➞ 3628800

function factorial(num) {
	let f = 1;
	if(num != 0){
		for(let i = 1; i <= num; i++){
			f *= i;
		}
	} else return 1;
	
	return f;
}

// console.log(factorial(10))