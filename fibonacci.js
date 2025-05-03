// get the num then make an arr to that num(array length) with fib num

function fibs(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}



function fibRec(n) {
  return n < 2 ? n : fibRec(n - 1) + fibRec(n - 2);
}

function fibArr(n) {
  const array = [];

  let i = 0;
  while (i < n) {
    array.push(fibRec(i));
    i++;
  }
  return array;
}


console.log("iteration: ", fibs(8));
console.log("recursion: ", fibArr(8));

/* this is the ideal solution (only for learning)

 function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}  */

