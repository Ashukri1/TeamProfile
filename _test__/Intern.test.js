const Intern = require("../lib/intern");

test("Testing School" ,() =>{
    const testSchool = "University of Toronto";
    const intern = new Intern("Bob", 1, "<EMAIL>", testSchool);
    expect(intern.school).toBe(testSchool);
    });
    test("Testing Role", () => {
        const intern = new Intern("Bob", 1, "<EMAIL>", "University of Toronto");
        expect(intern.getRole()).toBe("Intern");
        });
        

