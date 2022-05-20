// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    let newArray = [array[0], array[1]]
    return newArray;
}
const returnLastTwoDrivers = function(array){
    let newArray = array.slice(-2)
    return newArray;
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(){
    return function(multiple){
        return multiple ** 2
    }
}
function fareDoubler(fare){
    return fare * 2
}
function fareTripler(fare){
    return fare * 3
}
function selectDifferentDrivers(arrayOfDrivers, functionName){
    return functionName(arrayOfDrivers)
     
    
}