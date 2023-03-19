const returnFirstTwoDrivers= function(drivers) {
    const firstDriver =drivers[0];
    const secondDriver=drivers[1];
    return [firstDriver,secondDriver];
}

const returnLastTwoDrivers = function (drivers){
    const secondlastDriver =drivers[2];
    const lastDriver = drivers[3];
    return [secondlastDriver,lastDriver];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
 
function createFareMultiplier(fare){
    return function(distance){
        return fare*distance

    }
}
    const multiplyByfour = createFareMultiplier(4)
    multiplyByfour(10)

    function fareDoubler(fare){
        return fare*2
    }

    function fareTripler (fare){
        return fare*3
    }

    function selectDifferentDrivers(arrayOfDrivers,drivers){
        return drivers(arrayOfDrivers)
        
    }

    

