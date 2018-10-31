function asynReduce(collection, iteratee) {
  let arr = [];
  let otherArr = [];
  let counter = 0;
  collection.forEach((item, index) => {
    iteratee(item, () => {
      counter++;
      arr[index] = item;
      otherArr.push(item);
      if (counter === collection.length) {
        console.log(arr);
        console.log(otherArr);
      }
    });
  });
}

function getName(name, callback) {
  setTimeout(() => {
    console.log(name);
    callback(name);
  }, Math.random() * 2000);
}

let myArr = ["Tom", "Sam", "Deano", "Mikus"];

asynReduce(myArr, getName);
