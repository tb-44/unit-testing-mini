const userData = require('./mockData/userData');

module.exports = {
    delete: function(userData){
    var usersPass = userData.map((e) => {
        return delete e.password
    })
    return usersPass;   
  }
}