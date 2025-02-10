import { sum } from "../sum"

test("Summ of the two number", () => {

    const result = sum(4, 5);

    expect(result).toBe(9);

})