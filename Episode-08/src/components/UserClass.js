import React from 'react';
import { ABOUT_API } from '../utils/constants';

// class UserClass extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count1: 1,
//             count2: 2
//         }

//         console.log(this.props.type + ' UserClass constructor')
//     }

//     componentDidMount() {
//         console.log(this.props.type + ' UserClass componentDidMount')
//     }

//     render() {
//         const {name, location} = this.props;
//         const {count1} = this.state;

//         console.log(this.props.type + ' UserClass render')

//         return (
//             <div className="user-container">
//                 <h3>Class based User Component</h3>
//                 <h4>Name: {name}</h4>
//                 <h4>Location: {location}</h4>
//                 <h4>
//                     Count1: {count1}
//                     <button style={{ marginLeft: "6px" }} className='btn-login' onClick={() => {
//                         this.setState({
//                             count1: this.state.count1 + 1
//                         })
//                     }}>Click</button>
//                 </h4>
//                 <h4>Count2: {this.state.count2}</h4>
//             </div>
//         )
//     }
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

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