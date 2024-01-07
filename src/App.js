import React, { useState, useEffect } from 'react';
let imp = import('../wasm-hello-world/pkg');

const App = () => {

    const [counter, setCounter] = useState(null);
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        const initCounter = async () => {
            imp.then(wasm => {
                const counterInstance = wasm.Counter.new();
                setCounter(counterInstance);
            });

        };

        initCounter();
    }, []);

    const handleIncrement = () => {
        counter.increment();
        forceUpdate();
    };

    const forceUpdate = () => setUpdate(update+5);

    return (
        <div className="App">
            <h1>
                React Chrome Extension with Rust Wasm Counter
            </h1>

            {
                counter && (
                    <div>
                        <p>
                            Counter Value: {counter.get_count()}
                        </p>
                        <button onClick={handleIncrement}>
                            Increment
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default App;