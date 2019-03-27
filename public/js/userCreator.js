//new user function. How to save?
// var mongoObjectId = function () {
//     var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
//     return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
//         return (Math.random() * 16 | 0).toString(16);
//     }).toLowerCase();
// };
// var userID = mongoObjectId();
// console.log(userID);
//this works, but it recalculates the id everytime it is loaded. This is fine, I guess, if it is only going to be run once per user.

class User {
    constructor(firstName, lastName, dob, items, userID, deleted) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.items = items;
        this.userID = userID;
        this.deleted = 0;//this gives the entire class a default value of zero for this field

    }

    set userID(userIDmaker) {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };
    get userIDmaker();
}
var user1 = new User("Michael", "Parnell", "07201994", [{ "item1": [{ "category": "1" }, { "name": "Job1" }, { "amount": 1000 }, { "occurance": "OnceAMonth" }] }])
// console.log(user1);
var user2 = new User("Tracey", "Parnell", "02081972", []);
// console.log(user2);

const userObject = {
    firstName: 'Michael',
    lastName: "Parnell",
    dob:
}
console.log(userObject);















