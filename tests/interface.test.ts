import { Seller } from "../src/interface";
import { Employee, Manager } from "../src/employee";
import { Human } from "../src/human";
describe("Interface", () => {

    it("should support interface typescript", () => {
        const seller: Seller = {
            id: 1,
            name: "Aji",
            // address: "Jl. Raya"
            phone: "0812345678",
            email: "aji@example.com"
        };
        console.info(seller);

        seller.id = 2;
        // seller.phone = "0812345678";  // Error: Cannot assign to 'phone' because it is a read-only property

    });

    it("should support function interface", () => {
        interface addFunction {
            (value1: number, value2: number): number;
        }

        const add: addFunction = (value1, value2): number => {
            return value1 + value2;
        };

        expect(add(1, 2)).toBe(3);
    });

    it("should support array interface", () => {
        interface namesArray {
            [index: number]: string;
        }

        const names: namesArray = ["Aji", "Budi", "nando"];
        console.info(names);
    });

    it("should object interface", () => {
        interface Person {
            name: string;
            age: string;
        }

        const person: Person = {
            name: "Aji",
            age: "30"
        };

        console.info(person);
    });

    it("should support extend interface", () => {
        const employee: Employee = {
            id: 1,
            name: "nanda",
            division: "Sales"
        };

        const manager: Manager = {
            id: 2,
            name: "Aji",
            division: "Sales",
            numberOfEmployees: 10
        };
        console.info(manager);
        console.info(employee);
    });

    it("should support function in interface", () => {


        const Aji: Human = {
            name: "Aji",
            sayHello: (name: string): string => {
                return `Hello ${name}`;
            }
        };

        console.info(Aji.sayHello(Aji.name));
    });
    it("should support intersection type", () => {
        interface hasName {
            name: string;
        }
        interface hasId {
            id: string;
        }
        type Domain = hasName & hasId;

        const domain: Domain = {
            name: "Aji",
            id: "1"
        };
    });
    it("should support assertion type", () => {
        const person1: any = {
            name: "Aji",
            age: 30
        };

        const person2: Human = person1 as Human;
        console.info(person2);
        person1.sayHello(person1.name);
        // person2.sayHello(person2.name);

    });
});