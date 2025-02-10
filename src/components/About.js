
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {

    constructor(props) {
        super(props)

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount")
    }

    render() {
        // console.log("Parent Render");

        return (

            <div>
                <UserContext.Consumer>
                    {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                <h1>About Us</h1>
                <h2>This is React from Namaste React</h2>
                <UserClass />
            </div>
        )
    }
}


export default About;