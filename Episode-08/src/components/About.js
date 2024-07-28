import User from "./User";
import UserClass from "./UserClass";
import { Component, useEffect } from "react";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` Functional component `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

// const About = () => {
//     console.log("Parent About component")

//     useEffect(() => {
//         console.log("Parent About useEffect")
//     }, [])

//     return (
//         <div className="about-container">
//             <div className="about-card">
//                 <h2>About us</h2>
//                 <h3>This is about us page</h3>
//             </div>
//             {/* <User type={"Child1"} name={"Ashish Chowdhary"} location={"Saray"} />
//             <User type={"Child2"} name={"Ashish Chowdhary"} location={"Saray"} /> */}

//             <UserClass type={"Child1"} name={"Ashish Chowdhary"} location={"Saray"} />
//             <UserClass type={"Child2"} name={"Ashish Chowdhary"} location={"Saray"} />
//         </div>
//     )
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` Class Based component `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

// class About extends Component {
//     constructor() {
//         super();

//         console.log('Parent AboutClass constructor')
//     }

//     componentDidMount() {
//         console.log('Parent AboutClass componentDidMount')
//     }

//     render() {
//         console.log('Parent AboutClass render')

//         return (
//             <div className="about-container">
//                 <div className="about-card">
//                     <h2>About us</h2>
//                     <h3>This is about us page</h3>
//                 </div>
//                 {/* <User type={"Child1"} name={"Ashish Chowdhary"} location={"Saray"} />
//                 <User type={"Child2"} name={"Ashish Chowdhary"} location={"Saray"} /> */}

//                 <UserClass type={"Child1"} name={"Ashish Chowdhary"} location={"Saray"} />
//                 <UserClass type={"Child2"} name={"Ashish Chowdhary"} location={"Saray"} />
//             </div>
//         )
//     }
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

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