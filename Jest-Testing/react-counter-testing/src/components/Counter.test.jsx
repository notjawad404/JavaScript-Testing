import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Counter from "./Counter";

describe("Counter", () => {
    it("counter displays the initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    })
})