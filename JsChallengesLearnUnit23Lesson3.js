/*
Building Higher Order Functions
Submitted on Sun, May 06
Read through the implementation of forEach above, going through each line to make sure you understand what is happening. Is the implementation simpler or more complex than you thought it would be? Why?
*/

<script>
function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }

  return arr;
}

forEach(['one', 'two', 'three'], function (val, index, arr) {
  console.log(val, index, arr);
});
</script>
/*
here's what's going on in this code line by line

1) function forEach is placed in memory in the global scope

2) function forEach is invoked

3) javascript reads the data in the square brackets and replaces the arr inside of the parenthisies of 1st function.

4) Javascript replaces the callback word in the forEach argument with the arguments val, index, arr in the function block of the first function.

5) the for-loop creates a variable called "i"

6) the for-loop starts to iterate over the arguments array at index 0 replacing var 'i' with the data in the 0 index - array[i] - (1st position of the array)

7) the for loop takes the index of the data of i and compares it to the Boolean (arr.length) to see if the statement is true. (is the number of the index less than the length of the argument arr) is 0 < 3 = true.

8) the third line of the function states that each time the for loop runs arr[i] will be stated, the index number of arr[I] will be stated, and the entire array named arr will be stated.      one 0 [‘one’, ‘two’, ‘three’]

____________________________________________

09) if the Boolean is true, in the for-loop, the for-loop continues to iterate to the next index of the argument array arr at index 1 replacing var 'i' with the data in the  index -arr[i] - (2nd position of the array)

10) the for loop takes the index of the data of i and compares it to the Boolean (arr.length) to see if the statement is true. (is the number of the index less than the length of the argument array) is 1 < 3 = true.


11) the third line of the function states that each time the for loop runs arr[i] will be stated, the index number of arr[I] will be stated, and the entire array named arr will be stated.    two 1 [‘one’, ‘two’, ‘three’]

____________________________________________
12) if the Boolean is true, in the for-loop, the for-loop continues to iterate to the next index of the argument array arr at index 2 replacing var 'i' with the data in the  index -arr[i] - (2nd position of the array)

13) the for loop takes the index of the data of i and compares it to the Boolean (arr.length) to see if the statement is true. (is the number of the index less than the length of the argument array) is 2 < 3 = true.


14) the third line of the function states that each time the for loop runs arr[i] will be stated, the index number of arr[I] will be stated, and the entire array named arr will be stated.    three 2 [‘one’, ‘two’, ‘three’]

____________________________________________
15) if Boolean is true in the for loop the for loop continues to iterate to the next index of the argument array arr replacing var 'i' with the data in of that index -array[i] - (the next position of the array)

16) the for loop takes the index of the data of i and compares it to the Boolean (arr.length) to see if the statement is true. (is the number of the index less than the length of the argument array) Because there are no more indexes in the argument array arr the for-loop stops running.
  - no information given < 3 = false -

17) the for-loop stops running

18) the function forEach returns the array arr

19 the function forEach disappears from the global scope and the return value disappears

*/
