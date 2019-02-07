var words = ["ground", "control", "to", "major", "tom"];


var map = function(words, callback) {
  // console('hit1');
  var results =[]
  for (var i = 0 ; i < words.length; i++) {

    results.push(callback(words[i]))
  }
  return results
  console.log('Hit3')
}

//map(words);


console.log(map(words, function(word){
   return word.length;
}));
console.log(map(words, function(word){
   return word.toUpperCase();
}));
console.log(map(words, function(word){
   return word.split('').reverse().join('');
}));
//console.log(map(words, function(word){
  // return word.;
//}));




// var output = words.map(words, function(words[]) {
  // return word.length;
// });


// console.log(output);
