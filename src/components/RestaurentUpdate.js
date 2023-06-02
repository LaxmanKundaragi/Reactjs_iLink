// import React, { Component } from "react";
// class RestaurentUpdate extends Component {
//     constructor()
//     {
//         super();
//         this.state = {
//             name: null,
//             email: null,
//             rating: null,
//             address: null
//         }
//     }

//     componentDidMount() {
//         fetch("http://localh ost:3000/Restarunt/"+this.props.match.params.id).then((responce) => {
//             responce.json().then((result) => {
//                 console.warn(result)
//                 this.setState({ name:result.name })
//             })
//         })
//     }



//     render() {
//         // console.warn(this.props.match.params.id);
//         return (
//             <div>
//                 <h2>RestaurentUpdate</h2>
//                 <div>
//                     <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder='Enter RestaurentName' value={this.state.name} />
//                     <br></br><br></br>
//                     <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder='enter mailid' />
//                     <br></br><br></br>
//                     <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder='Give Rating..' />
//                     <br></br><br></br>
//                     <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder='address' />
//                     <br></br><br></br>
//                     <button onClick={() => { this.update() }}>Update resturant..</button>


//                 </div>
//             </div>
//         )
//     }
// }

// export default RestaurentUpdate;


import React, { Component } from "react";

class RestaurentUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            rating: "",
            address: ""
        };
    }

    componentDidMount() {
        const { match } = this.props;
                if (match && match.params && match.params.id) {
            fetch(`http://localhost:3000/Restarunt/${match.params.id}`)
                .then((response) => response.json())
                .then((result) => {
                    console.warn(result);
                    this.setState({ name: result.name,
                                    rating :result.rating,
                                    address :result.address,
                                    email:result.email
                    
                    
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }


    update()
    {


    }
    render() {
        return (
            <div>
                <h2>RestaurentUpdate</h2>
                <div>
                    <input onChange={(event) => {this.setState({ name: event.target.value })}} placeholder="Enter RestaurentName" value={this.props.name}/>
                    <br></br><br></br>
                    <input onChange={(event) => {this.setState({ email: event.target.value })}} placeholder="Enter mailid" value={this.state.email}/>
                    <br></br><br></br>
                    <input onChange={(event) => {this.setState({ rating: event.target.value })}} placeholder="Give Rating.." value={this.state.rating}/>
                    <br></br><br></br>
                    <input onChange={(event) => {this.setState({ address: event.target.value })}} placeholder="Address" value={this.state.address}/>
                    <br></br> <br></br>
                    <button onClick={() => { this.update() }}>Update resturant..</button>
                </div>
            </div>
        );
    }
}

export default RestaurentUpdate;
