const Prime = (num)=> {
    if(num <=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0) return false;
    }
    return true;
};
const n =29;
if (Prime(n)) 
    {
    console.log(`${n} is a prime number.`);
    } 
    else {
    console.log(`${n} is not a prime number.`);
    }
