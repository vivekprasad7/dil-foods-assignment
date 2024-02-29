import { sum } from "../funcs/sum"



test("sum should return product of a and b" , () => {
    const result = sum(2,3)
    expect(result).toBe(6)
})