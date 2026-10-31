import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prev) => prev + 1)
    }

    const decrement = () => {
        setCount((prev) => prev - 1)
    }

    const reset = () => {
        setCount(0)
    }

    const switchSign = () => {
        setCount((prev) => prev * -1)
    }

    return (
<div className="counter-container">
  <h2>Counter: {count}</h2>

  <button className="increment-btn" onClick={increment}>Increment</button>
  <button className="decrement-btn" onClick={decrement}>Decrement</button>
  <button className="reset-btn" onClick={reset}>Reset</button>
  <button className="switch-btn" onClick={switchSign}>Switch Sign</button>
</div>
    )
}
