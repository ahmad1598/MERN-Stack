   // ************************ almostIncreasingSequence ****************************
    //Given a sequence of integers as an array, determine whether it is possible to obtain a       // strictly increasing sequence by removing no more than one element from the array.
    //******************************************************************************



function almostIncreasingSequence(sequence) {
    let flag = 0;
    let i = 0;
    while(i < sequence.length - 1){
      if(sequence[i] < sequence[i+1]){
          i++;
          continue;
      } else{
          flag++;
          if(sequence[i+1] <= sequence[i-1] && sequence[i+2] <= sequence[i]){
              flag++;
          } else{
              i++;
          }
          if(flag > 1){
              return false;
          }
      }
    }  return true;
}
    

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.