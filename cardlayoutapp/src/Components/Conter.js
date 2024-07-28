import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <button className="btn btn-danger col-1" onClick={() => { setCount(count - 1) }}>-</button>
            <h4>{count}</h4>
            <button className="btn btn-success col-1" onClick={() => { setCount(count + 1) }}>+</button>

        </>
    );
}
export default Counter;