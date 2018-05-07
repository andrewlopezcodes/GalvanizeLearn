/*
doubleNumbers
JAVASCRIPT
Example:

if you pass it [1,2,3] then it should return [2,4,6]
*/

<script>
function doubleNumbers(numbers){
  var result = []
  for (var i =0; i< numbers.length; i++){
    result[i] = numbers[i]*2;
  }
  return result;
}

</script>


/*
JAVASCRIPT
Write function named multiplyNumbers that will take an array of numbers and return an array with those numbers multiplied by another value

Examples:

if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/
