const stockValues = require('./mockData/stockData');

module.exports = {
   getTotal(arr) {
       var total = arr.reduce((prev, curr) => {
           return prev + Number(curr.value.splice(1))
       }, 0);
       console.log(total);
       return total;
   }
}