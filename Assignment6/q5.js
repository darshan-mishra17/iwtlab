let fruits= ["apple", "banana", "orange", "grape", "kiwi"];

const display=(array,message)=> console.log(message,array);
display(fruits, "Initial array:");
fruits.push("Mango");
display(fruits, "1st array:");
fruits.pop();
display(fruits, "2nd array:");
const check=(fruits)=>{
if("orange" in fruits) return true;
else return false;
}
if(check){
    console.log("true")
}
fruits.sort((a, b) => a.localeCompare(b));
display(fruits, "After sorting alphabetically");
const fruitsCopy = [...fruits];
display(fruitsCopy, "Shallow copy of the array:");
