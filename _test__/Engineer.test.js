const Engineer = require ("../lib/enginner");

describe("Engineer", () => {
    it("should return the engineer's name", () => {
        const engineer = new Engineer("Josh", 1, "<EMAIL>", "josh-moore");
        expect(engineer.name).toEqual("Josh");
        });
        it("should return the engineer's id", () => {
            const engineer = new Engineer("Josh", 1, "<EMAIL>", "josh-moore");
            expect(engineer.id).toEqual(1);
            });
        it("should return the engineer's email", () => {
            const engineer = new Engineer("Josh", 1, "<EMAIL>", "josh-moore");
            expect(engineer.email).toEqual("<EMAIL>");
            });
            it("should return the engineer's github", () => {
                const engineer = new Engineer("Josh", 1, "<EMAIL>", "josh-moore");
                expect(engineer.github).toEqual("josh-moore");
                });
                it("should return the engineer's role", () => {
                    const engineer = new Engineer("Josh", 1, "<EMAIL>", "josh-moore");
                    expect(engineer.getRole()).toEqual("Engineer");
                    });

});




