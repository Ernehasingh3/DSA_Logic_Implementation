/**
 * Here we find unique value from array and '0' assign at End of this array
  */

/**
 * Here Array is initialize
 * Second Find Length of array and assign into n
 */
let array=[1,3,4,0,7,0,0];
let n=array.length;
let count=0;

/**
 * here 'for' loop for traverse array to find value
 */
for(let i=0;i<n;i++)
  {
/**
 * here check condition  array[i] value is 1 Not Equale to 0 then loop ,
 * array[count++] like 0,1.. with increase index value and store array[i] value like 1,3,4...
 */
      if(array[i]!==0)
    {
      array[count++]=array[i];
    }
  }
  /**
   * last Count value is 5.
   * here check count (5) Not Equal to 8
   * when count 4 then assign 0
   * count 5 then assign 0
   *  count 6 then assign 0
   */
  while(count!==n)
  {
    array[count++]=0; 
  }
  /**
   * Here print output of this array.
   * using console.log function
   */
console.log(array);
  
