import React, { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(0);
    const handleIncrease = () => {
        setNumber(number + 1);

    };
    const handleDecrease = () => {
        setNumber(number - 1);
    };


    return (

        <div>
            {number}
            <p>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>

            </p>
        </div>
    )
}

export default Counter