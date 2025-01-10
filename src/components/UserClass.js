import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        //state is a reserved keyword here
        this.state = {
            userInfo: {
                name: 'Amey',
                location: 'Mumbai'
            }
        }
        console.log(props);
    }

    async componentDidMount() {
        //API call here
        const res = await fetch('https://api.github.com/users/ameypatankar');
        const resJson = await res.json();
        this.setState({
            userInfo: resJson
        });
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        // const {name, location} = this.props;

        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <div className="profile-img"><img src={avatar_url} /></div>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: ameybpatankar@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;