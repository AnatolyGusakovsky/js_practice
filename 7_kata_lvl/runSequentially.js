// *** Написать функцию, которая принимает массив и асинхронный коллбек, который вызывается для каждой функции последовательно. Результатом вызова функции должен быть массив результатов вызовов колбека.
// //
// //   Пример вызова:

async function runSequentially (arr, f) {
  return arr.map( (item, index) =>  f(item, index))
}

const array = ["one", "two", "three"];

const results = await runSequentially(array, (item, index) =>
  Promise.resolve({
    item,
    index,
  })
);

console.log(results)