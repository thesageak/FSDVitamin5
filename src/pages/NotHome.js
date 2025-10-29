import React from 'react';
import { useState, useEffect } from 'react';
function NotHome() {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (counter >= 5) {
            setMessage("You passed 5!");
        } else {
            setMessage("");
        }
    }, [counter]);

    return (
        <div>
            <h1>Not Home Page</h1>
            <h2>Counter: {counter}</h2>
            {
                message && <h3>{message}</h3>
            }
            <button onClick={() => setCounter(counter + 1)}>
                Increase
            </button>
            <button onClick={() => setCounter(counter - 1)}>
                Decrease
            </button>
        </div>
    )
}

export default NotHome;