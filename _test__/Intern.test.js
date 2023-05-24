const Intern = require("../lib/intern");

describe("Intern", () => {
    const intern =new Intern ('mike', 3, 'mike1@gmail.com', 'mike1');
        expect(intern.getName()).toEqual('mike');
});
describe("getSchool", () => {
    const intern =new Intern ('mike', 3,'mike1@gmail.com','GSU');
    expect(intern.getSchool()).toEqual('GSU');
    });
    describe("getRole", () => {
        const intern =new Intern ('mike', 3,'mike1@gmail.com','GSU');
        expect(intern.getRole()).toEqual('Intern');
        });



