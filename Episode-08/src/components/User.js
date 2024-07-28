import { useState } from "react";

const User = ({ name, location, type }) => {
    const [count1, setCount1] = useState(1);
    const [count2] = useState(2);

    console.log(type + ' User component')

    useState(() => {
        console.log(type + " User useState")
    }, [])

    return (
        <div className="user-container">
            <h3>Functional User Component</h3>
            <h4>Name: {name}</h4>
            <h4>Location: {location}</h4>
            <h4>
                Count1: {count1}
                <button style={{ marginLeft: "6px" }} className='btn-login' onClick={() => {
                    setCount1(count1 + 1)
                }}>Click</button>
            </h4>
            <h4>Count2: {count2}</h4>
        </div>
    )
}

export default User;