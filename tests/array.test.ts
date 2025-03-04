describe('Array Methods', () => {
    it('should return value of the array', () => {
        const names: string[] = ["Aji", "Afdan", "Alvin"];
        const value: number[] = [1, 2, 3, 4, 5];
        value[0] = 10;

        console.info(names);
        console.info(value);
    });

    it('should readonly array', () => {
        const fixNames: ReadonlyArray<string> = ["Aji", "Afdan", "Alvin"];
        // fixNames[0] = "Aji"; // Error
        console.info(fixNames);
    });

    it('should tuple array', () => {
        const person: readonly [string, string, number] = ["aji", "Setiawan", 20];
        // person[0] = "Aji"; // Error
        console.info(person);
    });
});