describe("object test", () => {
    it("should have correct structure", () => {
        const person: { name: string, male: boolean | string } = {
            name: "John Doe",
            male: true
        };

        console.info(person); // { name: 'John Doe', male: true }


        // person.name = 1; // Error: Type 'number' is not assignable to type 'string'.
        person.name = "Nanda";
    });
});