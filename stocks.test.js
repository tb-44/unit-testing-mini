const stockValues = require('./mockData/stockData');
const stockFunc = require('./stocks');

test('checking stock values', () => {
    for (var i = 0; i < stockValues.length; i++ ){
        testTotal += Number(stockValues[i].value.splice(1));
    }
    expect(stockFunc.getTotal(stockValues).toBe(testTotal))
})