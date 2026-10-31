import {describe, test, it, expect} from 'vitest'
import {fizzBuzz, max } from "../src/intro"


describe("Max" , () => {
    it("should return the first argument if it is greater", () => {
        const result = max(2, 1);
        expect(result).toBe(2);
    })

    it("should return the second argument if it is greater", () => {
        const result = max(3, 5);
        expect(result).toBe(5);
    })

    it("should return the first argument if both are qual", () => {
        const result = max(1, 1);
        expect(result).toBe(1);
    })
})


describe('fizzBuzz', () => {
  it("Should return FizzBuzz when number is divisible by 3 and 5", ()=>{
    const result = fizzBuzz(15);
    expect(result).toBe("FizzBuzz")
  })
    it("Should return Fizz when number is divisible by 3", ()=>{
    const result = fizzBuzz(9);
    expect(result).toBe("Fizz")
  })
    it("Should return Buzz when number is divisible by 5", ()=>{
    const result = fizzBuzz(25);
    expect(result).toBe("Buzz")
  })

  it("Should return number as string if it is neither divisible by 3 nor 5", () =>{
    const result = fizzBuzz(16);
    expect(result).toBe("16")
  })
})
