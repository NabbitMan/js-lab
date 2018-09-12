function reverseString(str) {
  return Array.from(str.trim()).reverse().join('');
}

function reverseWordsInSentences(sen) {
   return sen.trim().split(' ').map( s => reverseString(s));
}

function reverseWordsInSentencesForWordLengthGreaterThanN(sen, n=5) {
  return sen.trim().split(' ').map( s => s.length >=n ? reverseString(s) : s).join(' ');
}

// better name for reverseWordsInSentencesForWordLengthGreaterThanN
function spinWords(sen, n=5) {  
  return sen.trim().split(' ').map(w => (w.length >=n) ? w.split('').reverse().join('') : w).join(' ');
}

console.log(spinWords('This is a sentence'));