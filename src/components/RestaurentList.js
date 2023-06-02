import React, { Component} from "react";
import { Link } from 'react-router-dom'


class RestaurentList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/Restarunt").then((responce) => {
            responce.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
            })
        })
    }

    refreshData() {
        fetch("http://localhost:3000/Restarunt").then((responce) => {
            responce.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
            })
        })
    }

    delete(id) {
        // console.warn(id);
        fetch("http://localhost:3000/Restarunt/" + id,
            {
                method: "DELETE",
                //     headers:{
                //         'content-type':'application/json'
                //     },
                //     body:JSON.stringify
            }).then((result) => {
                result.json().then((resp) => {
                    alert("Resturent has been deleted..")
                    this.refreshData()
                })
            })

    }
    render() {
        return (
            <div> &nbsp;&nbsp;
                <h4 style={{color:"green"}}> This is employee details.... </h4>
                {
                    this.state.list ?
                        <div>
                            <div className="list-wrapper">
                                <span>#</span>
                                <span>Name</span>
                                <span>Email</span>
                                <span>Address</span>
                                <span>Rating</span>
                                <span>Edit/Delete</span>
                            </div>
                            {/* <span><Link to ={'/update/'+item.id}>edit</Link></span> */}
                            {/* <button style={{color:"white",backgroundColor:"red"}} onClick={()=>this.delete(item.id)}>Delete Data</button> */}
                            {
                                this.state.list.map((item, i) =>
                                    <div class="list-wrapper">
                                        <span>{item.name}</span>
                                        {/* <input onChange={(event)=>{console.log('event info',event.target.value)}} value={(event)=>event.target.value}/> */}
                                        <span>{item.email}</span>
                                        <span>{item.address}</span>
                                        <span>{item.rating}</span>
                                        <span><Link to={'/update/' + item.id}>edit</Link></span>
                                        <button style={{ color: "white", backgroundColor: "red" }} onClick={() => this.delete(item.id)}>Delete Data</button>
                                    </div>)
                            }
                        </div> :
                        <p>Hii This is else Block....</p>
                }
            </div>
        )
    }
}
export default RestaurentList
