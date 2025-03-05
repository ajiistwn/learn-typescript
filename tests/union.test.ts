describe("union test", () => {
    it("should union type", () => {
        let sample: string | number = "hello";
        console.info(sample); // sample = hello

        sample = 100;

        console.info(sample); // sample = 100

        // sample = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
    });

    it("should union type with function", () => {
        function sampleFunction(sample: string | number) {
            if (typeof sample === "string") {
                console.info(`Hallo ${sample}`);
                return `Hallo ${sample}`;

            } else if (typeof sample === "number") {
                console.info(sample * 2);
                return sample * 2;
            }
        }

        expect(sampleFunction("Aji")).toBe("Hallo Aji");
        expect(sampleFunction(100)).toBe(200);
        // sampleFunction(true); // Error: Type 'boolean' is not assignable to type 'string | number'.
    });
});