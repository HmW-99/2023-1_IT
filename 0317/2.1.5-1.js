// var candyMachine = {
//   status: {
//     name: 'node',
//     count: 5,
//   },
//   getCandy: function () {
//     this.status.count--;
//     return this.status.count;
//   },
// };
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;


var candyMachine = {
    status: {
      name: 'node',
      count: 5,
    },
    getCandy: function () {
      this.status.count--;
      return this.status.count;
    },
  };
  const { getCandy, status } = candyMachine;
  console.log(count);