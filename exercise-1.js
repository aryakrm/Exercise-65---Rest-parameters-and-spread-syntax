function sum(...args) {
  const sumAll = args.reduce((arg, args) => {
    return (arg += args);
  }, 0);
  return sumAll;
}

console.log(sum(1, 2, 3, 4, 5));
