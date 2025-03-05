describe("Function Tests", () => {
    it("should perform a basic function test", () => {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        const result = sayHello("Aji");
        expect(result).toBe("Hello Aji");

        function helloName(name: string): void {
            console.info(`Hello ${name}`);
        }

        helloName("Budi");
    });

    it("should support default value", () => {
        function greet(name: string = "World"): string {
            return `Hello ${name}`;
        }
        console.info(greet());
        console.info(greet("Aji"));
    });

    it("should support rest parameter", () => {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        const total = sum(1, 2, 3, 4, 5);
        expect(total).toBe(15);
    });

    it("should support optional parameter", () => {
        function greet(name?: string): string {
            return `Hello ${name || "stranger"}`;
        }

        expect(greet()).toBe("Hello stranger");
        expect(greet("Aji")).toBe("Hello Aji");
    });

    it("should support function overloading", () => {
        function callme(value: number): number;
        function callme(value: string): string;
        function callme(value: any) {
            if (typeof value === "number") {
                return value * 2;
            }
            return `Hello ${value}`;
        }
        console.info(callme(10));
        console.info(callme("Aji"));

    });

});
