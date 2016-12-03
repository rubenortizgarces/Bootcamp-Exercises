function fibonacci (n) {
  if (n===0) return 0;
  if (n===1) return 1;
  var nMinus1 = n-1;
  var nMinus2 = n-2;
  var fibMinus1 = fibonacci(nMinus1);
  var fibMinus2 = fibonacci(nMinus2);
  var tempResult = fibMinus1 + fibMinus2;
  console.log ( "--------------------------------")
  console.log ( "n => " + n)
  console.log ( "fibonacci(" + nMinus1 + ") => " + fibMinus1)
  console.log ( "fibonacci(" + nMinus2 + ") => " + fibMinus2)
  console.log ( "fibonacci(" + nMinus1 + ") + fibonacci("+ nMinus2 +") => " + tempResult)
  return tempResult
}