// Develop a JavaScript function applyDiscount 
// that calculates the final price after applying a 10% discount on single purchases over £20.
// This function should help increase the average purchase value by offering an immediate incentive.


// Develop a JavaScript function applyDiscount 
// Calculates total amount after 10% discount if equal to or over £20
// Returns that value

function applyDiscount (total_value) {
if (total_value >= 20) {
    return total_value - total_value * 0.1;
} else {
    return total_value;
}
}

// function applyDiscount1 (total_value) {
//      return total_value >= 20 ?
//          total_value - total_value * 0.1 :
//          total_value;
//     }

//Create a function calculateLoyaltyPoints that awards points based on the purchase amount,
//where every dollar spent earns 1 point if no discount is applied.
//This function aims to build a foundation for a future loyalty program.

// create function calculateLoyaltyPoints
// e.g. if 19 dollars spent 19 points earned 
// if  20 dollars spent 0 points earned 

let customer1 = 1 

function calculateLoyaltyPoints (total_value) {
    if (total_value < 20){
        
        return customer1 + Math.floor(total_value)
    }
    else  {
        return customer1
    }

    }
