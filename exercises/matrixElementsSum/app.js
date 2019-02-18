// After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

// Help the bots calculate the total price of all the rooms that are suitable for them.

function matrixElementsSum(matrix) {
    let sum = 0;
    for(let i = 0; i < matrix.length; i++){
       for(let j = 0; j < matrix[0].length; j++){
          if(i == 0){
             sum += matrix[i][j];
          } else{
             if(matrix[i-1][j] == 0){
                matrix[i][j] = 0;
                sum += matrix[i][j];
             } else{
                sum += matrix[i][j];
             }
          }
          
       }
       
    }
    return sum;
    
 }
 
 //  [ 0, 1, 1, 2 ], [ 0, 5, 0, 0 ], [ 2, 0, 3, 3 ] 
 //  [1,1,1,0], [0,5,0,1], [2,1,3,10]
 //  
 //  
 //  [0][0] , [0][1] , [0][2] , [0][3] i = 0 , j = 0 - 3
 //  [1][0] , [1][1] , [1][2] , [1][3] i = 1 , j = 0 - 3
 //  [2][0] , [2][1] , [2][2] , [2][3] i = 2 , j = 0 - 3
 //  [3][0] , [3][1] , [3][2] , [3][3] i = 3 , j = 0 - 3