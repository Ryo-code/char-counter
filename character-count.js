var countLetters = function(str){
  var characters = str.split(' ').join('').split(''); //#1 way to get rid of the spaces
  // var characters = str.replace(/\s/g, '').split(''); //#2 way - regex
  // var characters = str.replace(/\s+/g, ''); //#3 way - concise regex

  var countedChars = {};

  for(i = 0; i < characters.length; i++){
    // console.log(characters[i]);
    if(!countedChars.hasOwnProperty(characters[i]) ){ //hasOwnProperty basically means "does exist"
      countedChars[characters[i]] = 1;                //...as in "if characters[i] doesn't exist"
    }else{
      countedChars[characters[i]] += 1;
    }
  }
  // console.log("str type: ", typeof str)
  // console.log("Characters: ", characters, "...Characters type: ", typeof characters);
  // console.log("countedChars: ", countedChars)
  // console.log("countedChars type: ", typeof countedChars)
  console.log(countedChars)
}

var userInput = process.argv.slice(2);
countLetters(userInput[0]);
