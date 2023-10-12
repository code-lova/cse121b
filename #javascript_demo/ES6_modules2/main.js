
/**
 * we can also use name aliases to reference our function name
 * if we are calling same function multiple time in our application
 * 
 * Example: import { sum as add } from "./calc.js";
 
 */

/**
 * NameSpaces: by using this we are able to import
 * from another module all its functons to use 
 * 
 * Example: import * as calc from "./calc.js";
 * reference: console.log(calc.sum(2,3))
 */

/**
 * Combine Export: This is will help when we have 
 * a situation where we have to import multiple functions 
 * from different modules, the application become messy 
 * by importing so many thing above.
 * 
 * Solution: we can create another module and export all modules there
 * then we can import that module and reference the name space that points
 * to that function.
 * 
 * Example: import * as combine from "./combine.js";
 */

/**
 * Dynamic import and export: This helps us to dynamically use any module
 * we have imported any where in our code and it must not be above 
 * like the rest. 
 * 
 * Example: const {sayHi, sayHola} = await import ("./greetings.js")
 * 
 * sometimes it invloves an inbuilt function called "Promises".
 * when we can to use multiple modules dynamically.
 * 
 * Example: 
 * 
 * const promises = promise.all(
 *      [
 *          await import("./greetings.js");
 *          await import("./calc.js")
 *      ]
 * );
 * 
 * 
 */



/**
 * All these are Static import and export- Note
 * 
 * These are just modules already impoted by commented out
 * cause we have exported all our modules to combine.js module
 * 
    * import * as calculation from "./calc.js"

    * import { sum as add, subtract } from "./calc.js";

    * import { default as Channel} from "./whoiam.js";

    * import myChannelName from "./whoiam.js";

*/
console.log("learning modules")

//Static import and export.
import * as combine from "./combine.js";


console.log(combine.calc.sum(21,30));

console.log(combine.calc.subtract(20,5));

console.log(combine.ChannelName());


//So we can use this dynamic import and export any where in our code.
//It must not necessaryly be at the top.
const { sayHi, sayHola } = await import("./greetings.js");

sayHi();

sayHola();

//We use this when we are trying to use multiple modules in our
//code dynamically.-> anywhere in our code.
const promises = Promise.all(
    [
        await import("./greetings.js"),
        await import("./calc.js"),
    ]
)

promises.then((result) => {
    //console.log(result);
    console.log(result[0].sayHola());
    console.log(result[1].sum(10, 20));
});
