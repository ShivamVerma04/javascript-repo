 const name = "Shivam"
 const repoCount = 50

//  console.log(name + repoCount);

//  console.log(`Helllo my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String ('ShivamSV')
//  console.log(gameName[5]);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('v'));

 const newString = gameName.substring(0, 4)
 console.log(newString);

 const  anotherString = gameName.slice(-7, 4)
 console.log(anotherString);

 const newStringOne = "   Shivam   "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://hitesh.com/hitesh%20choudhary"

 console.log(url.replace('%20', '-'))
 console.log(url.includes('hitesh'))