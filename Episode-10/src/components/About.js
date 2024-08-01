import User from "./User";
import UserClass from "./UserClass";
import { Component, useEffect } from "react";

class About extends Component {
    constructor() {
        super();

        // console.log('Parent AboutClass constructor')
    }

    render() {
        // console.log('Parent AboutClass render')

        return (
            <div className="about-container">
                <div className="about-card">
                    <h2>About us</h2>
                    <h3>This is about us page</h3>
                </div>

                <UserClass />
            </div>
        )
    }
}

export default About;