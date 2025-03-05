import { sayHello } from "../src/say-hello";

describe("optional parameters", () => {
    it("should return undefined if no value is passed", () => {
        function sayyHello(name?: string | null) {
            if (name) {
                console.info(`Hello, ${name}!`);
            } else {
                console.info("Hello");
            }
        }
        sayyHello("Aji");
        let name: undefined | null = undefined;
        sayyHello(name);

        name = null;
        sayyHello(name);
    });


});