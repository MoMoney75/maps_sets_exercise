//1
//What does the following code return?

//new Set([1, 1, 2, 2, 3, 4]);

//SOLUTION: [1, 2, 3, 4];

//2
//What does the following code return?

//[...new Set("referee")].join("")

//SOLUTION: "ref";

//3
//What does the Map m look like after running the following code?

////let m = new Map();
//m.set([1, 2, 3], true);
//m.set([1, 2, 3], false);

//SOLUTION:
//0: {Array(3) => true}
//1: {Array(3) => false}

//4
//SOLUTION:
const hasDuplicate = (arr) => {
  return new Set(...arr).size !== arr.length;
};

//5
//SOLUTION:
function isVowel(letters) {
  return "aeiou".includes(letters);
}

function vowelCount(str) {
  const myMap = new Map();
  for (let letters of str) {
    let lowerCaseChar = letters.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      if (myMap.has(lowerCaseChar)) {
        myMap.set(lowerCaseChar, myMap.get(lowerCaseChar) + 1);
      } else {
        myMap.set(lowerCaseChar, 1);
      }
    }
  }
  return myMap;
}
