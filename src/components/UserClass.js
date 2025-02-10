import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userinfo: {
                name: "dummy",
                location: "dummy",

            }
        }

        // console.log("Child Constructor");


    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/kevwil");

        const json = await data.json();


        // console.log(json)
        this.setState(
            { userinfo: json, }
        )

        // console.log("Child componentDidMount")
    }

    render() {

        const { name, location, avatar_url
        } = this.state.userinfo;

        // console.log("Child Render");

        return (
            <div className="user-card">
                <img src={avatar_url} />

                <h1>Nmae: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: ligadedipak8@gmail.com</h3>
            </div>
        )
    }
}

export default UserClass;