function getMinMaxOfArray(array) {
   let min = array[0];
   let max = array[0];

   for(let i=1; i < array.length; i++) {
       max = Math.max(max, array[i]);
       min = Math.min(min, array[i]);
    }

   return { min: min, max: max };
}

let result = getMinMaxOfArray([3, 2, 1, 56, 10000, 167]);
console.log(result)



