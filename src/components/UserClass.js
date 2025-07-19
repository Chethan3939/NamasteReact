import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo :{
                name : "dummy",
                location : "dummy",
                email : "dummy"
            }
        }

    }

    async componentDidMount(){
        console.log(this.props.place, "UserClass Component Mounted");

        const data = await fetch('https://dummyjson.com/users/1');
        const json = await data.json();
        console.log(json, "UserClass Component Data Fetched");
        this.setState({
            userInfo : {
                name : json.firstName + " " + json.lastName,
                location : json.address.city,
                email : json.email
            }
        });

        
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps,prevState, "UserClass Component Updated");

    }

    componentWillUnmount(){
        console.log(this.props.place, "UserClass Component Unmounted"); 
    }

    render(){
        console.log(this.props.place , "UserClass Component Render");
        
        const {name, location, email} = this.state.userInfo;
        return (
            <div className='user-card' >
                <h1>Name : {name}</h1>
                <h1>Location : {location}</h1>
                <h1>Email : {email} </h1>               
            </div>
        )
    }
}

export default UserClass;