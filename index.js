let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',
  ];
  
  // - Write a function findLongestWord that takes an array of words and returns the longest word from the array.
  // (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
  // let longest = [...words].sort((a, b) => a.length - b.length).pop();
  // function findLongestWord(arr){
  //   return arr
  // }
  // findLongestWord(longest)
  function findLongestWord(array){
    return [...words].sort((a,b) => a.length - b.length).pop()
  }
   console.log(findLongestWord(words))
  
  
  // - Convert the above array "words" into an array of length of word instead of word.
  let length = words.map((word) => word.length)
  console.log(length)
  // - Create a new array that only contains word with atleast one vowel.
  let oneVowel = words.filter((word) => {
    if
    (word.toLowerCase().includes("a") ||
    word.toLowerCase().includes("e") ||
    word.toLowerCase().includes("i") ||
    word.toLowerCase().includes("o") ||
    word.toLowerCase().includes("u") ){
        return true
    }else{
        return false
    }
  })
  
  // - Create a new array that contianse words not ending with vowel
  let notVowel = words.filter((word) => {
    if(word.toLowerCase().endsWith("a") ||
    word.toLowerCase().endsWith("e") ||
    word.toLowerCase().endsWith("i") ||
    word.toLowerCase().endsWith("o") ||
    word.toLowerCase().endsWith("u") ){
        return false
    }else{
        return true
    }
  })
  
  
  let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  
  // - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
  
  function sumArray(array){
      return numbers.reduce((acc, cv) =>{
        acc = acc + cv ;
        return acc ;

    },0);
  }
  console.log(sumArray())
  // - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
  let multiplied = numbers.filter((number) => number % 3 === 0)
  console.log(multiplied)
  // - Create a new array that contains only even numbers
  let even = numbers.filter((number) => number % 2 === 0)
  console.log(even)
  
  // - Create  a new array that contains only odd numbers.
  let odd = numbers.filter((number) => number % 2 !== 0)
  console.log(odd)
  
  // - Create a new array that should have true for even number and false for odd numbers.
  
  let newArray = numbers.map((number) => {
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
  })
  console.log(newArray)
  // - Sort the above number in assending order.
  let sorted = [...numbers].sort((a,b) => a-b)
  console.log(sorted)
  
  // - Does sort mutate the original array?
  // ```js
  // Yes 'sort();' method mutates the array 
  // ```
  // - Find the sum of the numbers in the array.
  let sum = numbers.reduce((acc,cv) =>{
    return acc + cv
  })
  console.log(sum)
  
  
  
  //- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
  function averageNumbers(array){
    let avg = numbers.reduce((acc,cv) => {
        acc = acc + cv
        return acc
    },0) /numbers.length
  }
   console.log(averageNumbers())

  
  
  let strings = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
  ];
  
  // - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
  
  // function averageWordLength(char){
  //   return char
  // }
  // let avg_word_length = strings.map(string => string.length/string.length)
  // averageWordLength(avg_word_length)
  