/* this will help us to compound equal amount payment interest*/

const factorial = numb => {
	let total = 1;
	if(numb === 0) return 1;
	else{
		for(let k=1 ; k <= numb; k++){
			total = total * k;}
	return total}
}

const combination = (numb, times) =>{
	if(numb === 0) throw new Error('can\'t be a Zero');
	if(times > numb) throw new Error( `${times} is greater than ${numb}`);
	let combine = factorial(numb) / (factorial(times) * factorial(numb-times));
	return combine;}

const equalPayment = (amount, interestRate, years) => {
	let total = years;
	for(let k = 0; k<years; k++){
		total += combination(years +1,k) * Math.pow(interestRate, years-k);}
	return Number((amount * total).toFixed(2));
}
 

console.log(equalPayment(10000,0.20, 24));