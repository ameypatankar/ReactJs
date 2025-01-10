import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <User name="Amey Patankar Function" location="Mumbai"/>

            {/* <UserClass name="Amey Patankar Class" location="Mumbai"/> */}
        </div>
    )
}

export default About;