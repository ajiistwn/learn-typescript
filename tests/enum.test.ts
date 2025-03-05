import { Customer, customerType } from "../src/enum";

describe("enum test", () => {
    it("should have correct structure", () => {
        const customer: Customer = {
            id: 1,
            name: "John Doe",
            type: customerType.REGULAR
        };

        console.info(customer)

        customer.type = customerType.GOLD;
        // customer.type = customerType.BROWN; // Error: Type 'customerType.BROWN' is not assignable to type 'customerType'.


        console.info(customer);
    });

});
