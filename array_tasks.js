var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(number => number * number);
	},

	sum: function (arr) {
		return arr.reduce((current, next) => current + next);
	},

	findDuplicates: function (arr) {
		duplicates = [];
		arr.forEach(function(item) {
			if((arr.indexOf(item) !== arr.lastIndexOf(item) && !duplicates.includes(item))){
				duplicates.push(item);
			}
		})
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter( i => i !== valueToRemove);
	},

	findIndexesOf: function (arr, itemToFind) {
		let indexes = [], i = -1;
		while((i = arr.indexOf(itemToFind, i + 1)) !== -1){
			indexes.push(i)
		}
		return indexes;

		// return arr.map(function(item, index) {
		// 	return(arr.indexOf(itemToFind) === index) ? index : null
		// }).filter(function(item) {
		// 	return item;
		// })


	},

	sumOfAllEvenNumbersSquared: function (arr) {
			evens = arr.filter( item => !(item % 2));
			return evens.reduce((current, next) => (current ** 2) + (next ** 2));
	}

}

module.exports = arrayTasks
