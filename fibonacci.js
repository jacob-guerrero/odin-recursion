function fibs(num) {
  let arr = [];
  let prev = 0;
  let next = 1;
  let out = 0;

  if (num <= 0) {
    return arr;
  }
  if (num === 1) {
    arr.push(prev);
    return arr;
  }
  arr.push(prev);
  arr.push(next);

  for (let i = 2; i < num; i++) {
    out = prev + next;
    prev = next;
    next = out;

    arr.push(out);
  }
  return arr;
}

console.log(fibs(0), fibs(1), fibs(2), fibs(3), fibs(8));
