//How to find unique value in array and zero shift end of this array.
//input:[1,3,4,0,7,0,0,9]
//ouput:[1,3,4,0,7,9]

/**
 * move_zero_end: function which is shift zero to end of the array
 * @param {*} array 
 * @returns 
 */
function move_zero_end(array) {
    let n = array.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (array[i] !== 0) {
            array[count++] = array[i];
        }

    }

    while (count !== n) {
        array[count++] = 0;

    }
    return array;
}

/**
 * find_unique_array: function to find unique items of an array
 * @param {*} array 
 * @returns 
 */
function find_unique_array(array) {
    let arr = [];
    let n = array.length;
    let start = false;
    let count = 0;
    for (let i = 0; i < n; i++) {
        //if(array[i]!==0)
        for (let j = 0; j < arr.length; j++) {
            // array[count++]=array[i];

            if (array[i] == arr[j]) {

                start = true;

            }
        }
        if (start == false) {
            arr.push(array[i]);
        }
        start = false;
    }
    return move_zero_end(arr);
}
/**
 * input data
 */
let array = [1, 3, 4, 0, 7, 0, 0, 9, 8, 7, 3];
/**
 * getting output here
 */
console.log(find_unique_array(array));

