var lang = require("./ru.json");

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log(lang.Hello + ", " + who.name);
};

console.log("User js is required");

module.exports = User;