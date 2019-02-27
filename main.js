const arr = [6,4,2,8,1,3,5,7,9];

const strandSort = (A) => {  
    let result = [];

	while (A.length) {
		let sorted = [];
		let leftover = [];

		let lastAdded = A[0];
		sorted.push(lastAdded);

		for (let i = 1; i < A.length; i++) {
            const next = A[i];
            if (next > lastAdded) {
                sorted.push(next);
			    lastAdded = next;
            } else {
                leftover.push(next);
			}
		}
        result = merge(sorted, result);
        A = leftover;        
    }
    return result;
}

const merge = (left, right) => {

    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    if (indexRight < right.length) {
        result = result.concat(right.slice(indexRight));
        
    } else if (indexLeft < left.length) {
        result = result.concat(left.slice(indexLeft));
    }   

    return result;
};

console.log(strandSort(arr));