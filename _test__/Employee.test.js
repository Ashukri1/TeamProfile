const Employee = require("../lib/employee");

describe("Employee" ,() => {
    it("should return the name of the employee", () => {
        const name = "Jane";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
        });
        it("should return the id of the employee", () => {
            const id = 1;
            const employee = new Employee("Jane", id);
            expect(employee.id).toBe(id);
            });
            it("should return the email of the employee", () => {
                const email = "<EMAIL>";
                const employee = new Employee("Jane", 1, email);
                expect(employee.email).toBe(email);
                });
                it("should return the role of the employee", () => {
                    const role = "Employee";
                    const employee = new Employee("Jane", 1, "Jane1@gmail.com");
                    expect(employee.role).toBe(role);
                    });

});
    

