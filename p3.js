var ourArray = ["Stimpson","J","Cat"];
ourArray.shift();
ourArray.unshift("Happy");

var myArray = [["John",23],[["Dog",3]]];
myArray.shift();

console.log(ourArray);
console.log(myArray);

myArray.unshift(["Paul",35]);
console.log(myArray);