import React, { useEffect } from 'react';

const User = ({name, location}) => {

    useEffect(()=> {
        console.log('use effect');
        const timer = setInterval(() => {
            console.log('Interval called')
        }, 1000);

        // callbarck function given to unmount the code 
        return () => {
            clearInterval(timer)
            console.log('unmount card');
        }
    }, [])

    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: ameybpatankar@gmail.com</h4>
        </div>
    )
};

export default User;