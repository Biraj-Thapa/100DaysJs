//write a function called checkTriangleType that takes three parameters representing the lengths of the side of a triangle.the function should return a string indicating he type of triangle "equilateral","isosceles" or "scalene"

//if all three sides are of equal length,return "equilateral" 
//if only two sides are of equal length ,return "isosceles"
//if all three sides have different lengths return "scalene"

let checkTriangleType=(AB,BC,AC)=>{
    if(AB===BC && BC===AC){
        return "equilateral"
    }
    else if(AB===BC || AB===AC  || BC===AC){
        return "isosceles"  
    }
    else{
        return "scalene"
    }

}
console.log(checkTriangleType(1,2,1));
console.log(checkTriangleType(2,4,6));
console.log(checkTriangleType(5,5,5));