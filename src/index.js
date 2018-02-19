/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) { //
    var triangles = 0, nextIndex, count = 0;

    for(var i = 0; i < preferences.length; i++){  

        nextIndex = preferences[i];
       for(var j = 0; j < 2; j++){   //getting to the next index only two time
         if(preferences[nextIndex - 1] == nextIndex) break;             
        count++;
        nextIndex = preferences[nextIndex - 1]; 
       }

        if(count == 2 && nextIndex == i + 1) 
           triangles++;       

        preferences[i] = null;
        count = 0;
      }

  return triangles;
}