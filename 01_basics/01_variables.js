const accountId = 144553
let accountEmail = "manujendradalei55@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hch@gmail.com"
accountPassword = "21222332"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])