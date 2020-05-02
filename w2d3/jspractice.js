
reverseArray = function(arr) {
    let tmp = arr.reverse();
    console.log(arr);
    return tmp;
};

reverseArrayInPlace = function(arr) {
    arr.reverse();
}


arrayToList = function(arr) {
    let list = {value: arr[0], rest: null}
    let curr = list;
    for (let i = 1; i < arr.length; i++) {
        curr.rest = {value : arr[i], rest: null};
        curr = curr.rest;
    }
    return list;
};

listToArray = function(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
};

prepend = function(element, list) {
    let resList = {value: element, rest: list};
    return resList;
};


nth = function(idx, list) {
    while (idx > 0) {
        list = list.rest;
        idx--;
    }
    return list.value;
}


DeepEqual = function (obj1, obj2) {
	//Loop through properties in object 1
	for (var p in obj1) {
		//Check property exists on both objects
		if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
 
		switch (typeof (obj1[p])) {
			//Deep compare objects
			case 'object':
				if (!DeepEqual(obj1[p], obj2[p])) return false;
				break;
			//Compare function code
			case 'function':
				if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
				break;
			//Compare values
			default:
				if (obj1[p] != obj2[p]) return false;
		}
	}
 
	//Check object 2 for any extra properties
	for (var p in obj2) {
		if (typeof (obj1[p]) == 'undefined') return false;
	}
	return true;
};




let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

console.log(reverseArray([1, 2, 3, 4]));

let arr = [1, 2, 3, 4];
reverseArrayInPlace(arr);

console.log(arr);

console.log(arrayToList([1, 2, 3, 4]));

console.log(listToArray(list));

console.log(prepend(4, list));

console.log(nth(0, list));

console.log(DeepEqual(list, list));