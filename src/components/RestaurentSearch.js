import React, { Component } from "react";

class RestaurentSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData: false
        }
    }

    search(key) {
        console.warn(key);
        fetch("http://localhost:3000/Restarunt?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn(resp)
                if (resp.length > 0) {
                    this.setState({ searchData: resp, noData: false })
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }
            })
        })
    }


    render() {
        return (
            <div>
            &nbsp;
                <h4>Search employeed details ..</h4>
                <input type="text" onChange={(event) => this.search(event.target.value)} />
                <div>
                    {
                        this.state.searchData ?
                            <div className="serch-row">
                                {

                                    
                                    this.state.searchData.map((item) =>

                            
                                        <div>{item.name}</div>

                                    )
                                }

                            </div> : <span>Search anything inside the list...</span>
                    }
                    {
                        this.state.noData ? <h3>No Details Found..</h3> : null
                    }
                </div>
            </div>




        )
    }
}
export default RestaurentSearch;