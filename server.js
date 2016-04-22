var User = require("./user");


function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    petya.hello(vasya);
}


if(module.parent) {
    exports.run = run;
}
else {
    run();
}