// code your solution here
// saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// mondayWork function
function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
}

// wrapAdjective function
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example calls:
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("party")); // "This Saturday, I want to party!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // "You are !!!a dedicated programmer!!!"
