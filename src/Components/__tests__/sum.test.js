import { sum } from "../sum"

test("Sum fn should calculate teh sum of two numbers", ()=> {
    const result  = sum(3, 4);

    //Assertion
    expect(result).toBe(7);
})