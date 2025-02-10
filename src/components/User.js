import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <button onClick={() => { }}>Click Me</button>
            <h1>Name:{props.name}</h1>
            <h2>Location: {props.location}</h2>
            <h3>Contact : ligadedipak8@gmail.com</h3>
        </div>
    )
}

export default User;