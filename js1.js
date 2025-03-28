console.log([]==[]) /*false*/ // array values are refered to objects so thw distinct objects never be equal and here for arrays each saperate memory is created so when comapring them it doesnt equal  
console.log([]===[]) // false //if two arrays contain the same elements, they are not equal unless they // here undefined is primitive data type and 'undefined 'is string so both are ot equal 
// console.log(undefined==='undefined') reference the exact same object in memory.
console.log({}=={}) // here in dictionaries for aech sperate moemory is created so those memoey addresses are not equal
console.log({}==={}) // here it checks also data type it ill equal ut the addresses will ot equal
console.log(true==true) // output is true because true means 1 here it is checking only values so true
console.log(true === true) // here the data type is also checked so value and data type are equal
console.log(false==false)// same as true 
console.log(false===false)
console.log(undefined==undefined) // undefined is a data type which defined to any variable before allocating the value to it so here the values are checked and both are equal so its is true    
console.log(undefined===undefined)// also the data type is checked along with value so it is true
console.log(undefined=="undefined") // here undefined is primitive data type and 'undefined 'is string so both are not equal so o/p is false (number vs string)
console.log(undefined==='undefined') // here both data types are different so false number vs string
console.log(null===null) // here null is defined as empty or no value so empty is equal to empty and both data types are objects are equal so o/p is true
console.log(null==undefined) //true because the == is comparing values here their values are equal like both represents empty 
console.log([1,2,3]==[1,2,3])// false  so here eventhough the values are equal their memomy addresses are not same 
console.log([1,2,3]===[1,2,3])// false same as above but datatypes are same
console.log({id:1} =={id:1}) // The two objects {id:1} and {id:1} are distinct objects stored at different memory locations. Even though their contents (key-value pairs) are identical, they are separate instances

// -> here in javascript it checks memory location for only non primitive data type becuse they store values so they create memory 
// whereas for primitive data types it don't check only values for ('==') for ("===") it checks values and datatypes but not memory loction
 let a = [1,2,3];
 let b = [1,2,3];
 console.log(a===b);// false
 console.log(a==a);// true
 console.log(b==b);// true
 console.log(a==b);// false