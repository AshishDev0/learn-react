import React from 'react';
import { ABOUT_API } from '../utils/constants';

class UserClass extends React.Component {
    constructor() {
        super();

        this.state = {
            userInfo: {
                name: "Default Name",
                location: "Default Location"
            }
        }

        // console.log('UserClass constructor')
    }

    async componentDidMount() {
        // console.log('UserClass componentDidMount')

        const data = await fetch(ABOUT_API);
        const json = await data.json();

        this.setState({
            userInfo: json
        })
    }

    render() {
        // console.log('UserClass render')

        // debugger;

        const { name, location } = this.state.userInfo

        return (
            <div className="user-container">
                <h3>Class based User Component</h3>
                <h4>Name: {name}</h4>
                <h4>Location: {location}</h4>
            </div>
        )
    }
}


export default UserClass;