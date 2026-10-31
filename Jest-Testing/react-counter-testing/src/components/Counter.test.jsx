import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Counter from "./Counter";

describe("Counter", () => {
    it("counter displays the initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });

    it("counter increments the count by 1 when increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const incrementButton = getByRole("button", { name: "Increment" });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(incrementButton);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(1);
    });

        it("counter decrements the count by 1 when decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const decrementButton = getByRole("button", { name: "Decrement" });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(decrementButton);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(-1);
    });

        it("counter resets the count to the initial value when reset button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={10} />);
        const incrementButton = getByRole("button", { name: "Increment" });
        const resetButton = getByRole("button", { name: "Reset" });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(10);
        fireEvent.click(incrementButton);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(11);
        fireEvent.click(resetButton);
        const countValue3 = Number(getByTestId("count").textContent);
        expect(countValue3).toEqual(0);
    });

        it("counter changes the sign of the count when change sign button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={10} />);
        const switchSignButton = getByRole("button", { name: "Switch Sign" });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(10);
        fireEvent.click(switchSignButton);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(-10);
    });
})
