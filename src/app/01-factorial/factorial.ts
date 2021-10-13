export function factorial(number){
	
    if(number === 0 ) return 1;
    if(number >= 10) return -1;

    let factorial = 1; 
	for (let i=1; i<=number; i++) {
		factorial = factorial * i; 
	}
	return factorial; 
	
}