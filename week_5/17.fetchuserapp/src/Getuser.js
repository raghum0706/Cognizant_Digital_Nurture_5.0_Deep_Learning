import React, { Component } from "react";

class Getuser extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            firstName: "",
            image: ""
        };
    }
    componentDidMount() {
        fetch("https://api.randomuser.me/")
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                this.setState({
                    title: user.name.title,
                    firstName: user.name.first,
                    image: user.picture.large
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="container">
                <h1>Random User</h1>
                <img
                    src={this.state.image}
                    alt="User"
                />
                <h2>
                    {this.state.title}. {this.state.firstName}
                </h2>
            </div>
        );
    }
}
export default Getuser;