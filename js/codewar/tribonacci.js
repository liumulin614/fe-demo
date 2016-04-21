/**
 * http://www.codewars.com/kata/556deca17c58da83c00002db/solutions/javascript/following/best_practice
 * @param  {[type]} signature [description]
 * @param  {[type]} n         [description]
 * @return {[type]}           [description]
 */
function tribonacci(signature, n){
	let i = 3;
	for(; i < n; i++){
		console.log(i);
		signature[i] = signature[i-1] + signature[i-2] + signature[i-3];
	}
	return signature.slice(0, n);
}