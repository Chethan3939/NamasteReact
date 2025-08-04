import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Component Constructor");
  }

  componentDidMount(){
    console.log("Parent Component Mounted");
  }

  render() {
    console.log("Parent Component Render");
    return (
      <div className="about">
        <h1>About Us</h1>
        <UserContext.Consumer>
          {({ logginUser }) => (
            <h2 className="text-2xl font-bold">UserName : {logginUser}</h2>
          )}  
        </UserContext.Consumer>
        <p>We are a team dedicated to providing the best service possible.</p>
        <p>Our mission is to innovate and lead in our industry.</p>
        <User name="Chethan G" location="Bangalore" email="chethan@gmail.com" />
        <UserClass
          name="Chethan G class"
          location="Bangalore class"
          email="chethan@gmail.com class"
          place = "First"
        />
      </div>
    );
  }
}

// const About = () => {
//     return (
//         <div className="about">
//             <h1>About Us</h1>
//             <p>We are a team dedicated to providing the best service possible.</p>
//             <p>Our mission is to innovate and lead in our industry.</p>
//             <User name="Chethan G" location="Bangalore" email="chethan@gmail.com" />
//             <UserClass name="Chethan G class" location="Bangalore class" email="chethan@gmail.com class"/>
//         </div>
//     );
//     }

export default About;
