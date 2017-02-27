//I: array
//O: sorted array
//C: ?
//E: length of 1 or 0;


function bubbleSort (arr) {

if (arr.length === 1 || arr.length === 0) {
        return arr;
    }

for (var i = 0; i < arr.length; i++) {
    let val1 = arr[i];
    let val2 = arr[i+1];
    console.log('val1', val1, 'val2', val2 );
    if (val1 > val2){
    console.log('here')
    console.log('val1', val1, 'val2', val2 );
    console.log('arr', arr)
        arr[i] = val2
        arr[i + 1] = val1
    console.log('recurse')
    bubbleSort(arr)
    }
}

console.log('done', arr)
return arr;
}


bubbleSort([ 100, 6,5,7,8, 22,9,7,2,1,0,-2, 4,3,2, -44]);

