/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	let split = string.split('');
	let stringMap = {};

	for(let char of split) {
		if(stringMap[char]) {
			stringMap[char]++;
		} else {
			stringMap[char] = 1;
		}
	}
	return stringMap;
}

function duplicateCharMinCount(string, minCount) {
	let counted = countCharacters(string);
	let newArray = [];
	for(let key in counted) {
		if(counted[key] >= minCount) {
			newArray.push(key);
		}
	}
	return newArray;
}

console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
