<script>
function copyArrayAndMultiplyBy2(array){
  var result = [];
  for (var i =0; i<array.length; i++){
    result.push(array[i] * 2);
  }
  return result;
}

copyArrayAndMultiplyBy2([1, 2, 3]);

</script>


/*
here's what's going on in this code line by line

1) function copyArrayAndMultiplyBy2 is placed in memory in the global scope

2) function copyArrayAndMultiplyBy2 is invoked

3) the array is set to result is created

4) javascript reads the argument array in the parenthisies replaces the argument in the function copyArrayAndMultiplyBy2

5) the for loop creates a variable called "i"

6) the for loop starts to iterate over the arguments array at index 0 replacing var 'i' with the data in the 0 index - array[i] - (1st position of the array)

7) the for loop takes the index of the data of i and compares it to the Boolean (array.length) to see if the statement is true. (is the number of the index less than the length of the argument array) is 0 < 3 = true.

8) the third line of the function states that each time the for loop runs array[i] will be multiplied by the number 2 (array[i]*2) 1 * 2 = 2

9) because of the .push() method being invoked on the results array, the calculation of array[i]*2 is moved into the results array's first position, index 0. (var result = [2];)
____________________________________________

10) if the Boolean is true, in the for loop, the for loop continues to iterate to the next index of the argument array at index 1 replacing var 'i' with the data in the  index -array[i] - (2nd position of the array)

11) the for loop takes the index of the data of i and compares it to the Boolean (array.length) to see if the statement is true. (is the number of the index less than the length of the argument array) is 1 < 3 = true.


12) the third line of the function states that each time the for loop runs array[i] will be multiplied by the number 2 (array[i]*2) 2 * 2 = 4

13) because of the .push() method being invoked on the results array, the calculation of array[i]*2 is moved into results arrays second position, index 1 (var result = [2, 4];)
____________________________________________
14) if Boolean is true in the for loop the for loop continues to iterate to the next index of the argument array at index 2 replacing var 'i' with the data in the index - array[i] - (3nd position of the array)

15) the for loop takes the index of the data of i and compares it to the Boolean (array.length) to see if the statement is true. (is the number of the index less than the length of the argument array) is 2 < 3


16) the third line of the function states that each time the for loop runs array[i] will be multiplied by the number 2 (array[i]*2) 3 * 2 = 6

17) because of the .push() method being invoked on the results array, the calculation of array[i]*2 is moved into results arrays first position, index 0 (var result = [2, 4, 6];)
____________________________________________
18) if Boolean is true in the for loop the for loop continues to iterate to the next index of the argument array replacing var 'i' with the data in of that index -array[i] - (the next position of the array)

19) the for loop takes the index of the data of i and compares it to the Boolean (array.length) to see if the statement is true. (is the number of the index less than the length of the argument array) Because there are no more indexes in the argument array the for loops stops runing.
  - no information given < 3 = false -

20) the for loop stops running

21) the function copyArrayAndMultiplyBy2 returns the resuts array













*/
