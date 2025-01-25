const accountId = 1444553
let  accountEmail = "om@ggogle.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "bengaluru"

console.log(accountId);


/*
Prefer not to use var
beacause of issue
 */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
