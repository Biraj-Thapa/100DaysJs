//write a function findMax that takes an array of number as input and retruns the maxium number in array

const findMax=(arr)=>{

        if (arr.length === 0) {
            return "empty array";
        }
        
        let maxArr = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (maxArr < arr[i]) {
                maxArr = arr[i];
            }
        }
        return maxArr;
    };
    


console.log(findMax([1,2,3,4]))