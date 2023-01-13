// complete the given function

function palindrome(str){
	let reverse = str.split(" ").reverse().join(" ");
	return str.toLowerCase() === reverse.toLowerCase();

}
console.log(palindrome("racecar"))
module.exports = palindrome
