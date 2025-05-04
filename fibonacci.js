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

function fibsRecNum(n) {
  return n < 2 ? n : fibsRecNum(n - 1) + fibsRecNum(n - 2);
}

function fibsRec(n) {
  if (n === 0) return [];
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];

  const array = fibsRec(n - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}

console.log("iteration:", fibs(8)); // [0, 1, 1,  2, 3, 5, 8, 13]
console.log("recursion (one Number):", fibsRecNum(8)); // 21
console.log("recursion:", fibsRec(8)); // [0, 1, 1,  2, 3, 5, 8, 13]
