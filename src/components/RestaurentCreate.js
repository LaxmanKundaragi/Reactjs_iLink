import React, { Component } from 'react';

class RestaurentCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            rating: null,
            address: null
        }
    }
    createrest() {
        // console.warn(this.state);
        fetch("http://localhost:3000/Restarunt",
            {
                method: "Post",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then((result) => {
                result.json().then((resp) => {
                    alert(this.state.name, "Has been added..")
                    console.warn(resp);
                })
            })

    }

    render() {
        return (
            <div> &nbsp;
                <h4 style={{ color: "green" }}> Add Employee Details...</h4> &nbsp;
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder='Enter Name' />
                    <br></br><br></br>
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder='Enter Emailid' />
                    <br></br><br></br>
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder='State Belongs to..' />
                    <br></br><br></br>
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder='Address' />
                    <br></br><br></br>
                    <button onClick={() => { this.createrest() }}>Add Details</button>


                </div>
                {/* <h2> The name of the resturent is:{this.state.name}</h2> */}
            </div>
        );
    }
}

export default RestaurentCreate;