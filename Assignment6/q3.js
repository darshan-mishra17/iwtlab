const calculate =(num1,num2,callback)=> {
    return callback(num1,num2)
    
};
const add=(num1,num2)=>num1+num2;
const sub=(num1,num2)=>num1-num2;
const mul=(num1,num2)=>num1*num2;

console.log(calculate(2,4,add));
console.log(calculate(2,4,sub));
console.log(calculate(2,4,mul));