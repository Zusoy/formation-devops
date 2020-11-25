const should = require('should');
const User = function (name) {
    this.name = name;
}

describe('Checking if the user is created correctly', () => {
    it ('should create the user with the correct name', () => {
        const tom = new User("tom");
        tom.name.should.be.equal("tom");
    });
});
