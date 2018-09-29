var faker = require('faker');

var getAllUsers = function () {
    var users = [];

    for (let id = 0; id < 50; id++) {
        var FirstName = faker.name.firstName();
        var LastName = faker.name.lastName();
        var Email = faker.internet.email();
        var Username = faker.internet.userName();
        var Password = faker.internet.password();

        users.push({
            "id": id,
            "FirstName": FirstName,
            "LastName": LastName,
            "Email": Email,
            "Username": Username,
            "Password": Password
        });
    }
    return {
        "Users": users
    };
}

module.exports = getAllUsers;