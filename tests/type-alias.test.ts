import { Category, Product } from "../src/type-alias";

describe("type alias test", () => {
    it("should type alias", () => {
        const category: Category = {
            id: 1,
            name: "Electronics"
        };

        const product: Product = {
            id: 1,
            name: "Laptop",
            price: 1000,
            category: category
        };
        console.info(product); // { id: 1, name: 'Laptop', price: 1000, category: { id: 1, name: 'Electronics' } }

        product.id = "Test";
        // product.id = true;   // Error: Type 'boolean' is not assignable to type 'ID'.

        console.info(product); // { id: 1, name: 'Laptop', price: 1000, category: { id: 1, name: 'Electronics' } }

        product.description = "This is a laptop";
        console.info(product); // { id: 1, name: 'Laptop', price: 1000, description: 'This is a laptop', category: { id: 1, name: 'Electronics' } }
        // product.description = 1; // Error: Type 'number' is not assignable to type 'string'.

    });
});  