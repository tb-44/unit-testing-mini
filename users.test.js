const users = require('./mockData/userData');
const functions = require('./users')

test("delete()) should return object without password.", () => {
  const updatedArray = users.delete(users);
  const taskComplete = true;
  updatedArray.map( user => {
      if (user.password) taskComplete = false;
  })
  expect(taskComplete).toEqual(false);
});