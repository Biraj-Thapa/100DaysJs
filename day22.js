//Write a function findMedian(arr) that takes an array of numbers as input and returns the median value.If the array has an even number of elements,return the average of two middle values.

//for example, the median of 3,3,5,9,15 is 5. If there is an even number of observations, then there is no single middle value; The median is usually defined to be the mean of two middle values:so the median of 3,5,7,9 is (5+7)/2=6
//Tips
//sort the array in ascending order.
//If the array has an odd number of elements,the median is the middle element.
//if the array has an even number of elements,the meidan is the average of the middle element.

const findMedian=(arr)=>{
     let  sortedArr=arr.sort((a,b)=>a-b)
     let mid=Math.floor(arr.length/2)
     if(sortedArr.length % 2===0){
         return((sortedArr[mid]+sortedArr[mid-1])/2)
     }
     else{
        return  sortedArr[mid];
     }

    
}
console.log(findMedian([1,2,5,6,3]));
console.log(findMedian([4,8,16,32]))
console.log(findMedian([3,4,5,9,10,11,6,7,8]));
console.log(findMedian([40,10,20,30]))
