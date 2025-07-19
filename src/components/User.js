import { useState } from "react";
const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(0);
    const {name, location, email} = props;

    return (
        <div className="user-card" >
            <h1>Name : {name} </h1>
            <h1>Location : {location} </h1>
            <h1>email : {email} </h1>
            <h1>count : {count} </h1>
            <h1>count2 : {count2} </h1>
        </div>
    )
}

export default User;