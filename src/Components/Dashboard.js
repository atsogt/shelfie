import React, { Component } from "react";
import axios from 'axios';



componentDidMount(){ 
  axios.get("./api/shelfieproduct").then(res => {
    this.setState({
      getProduct: res.data
    });
  });
}
export class Dashboard extends Component {
  render() {

    return <div className="dashboard">Dashboard</div>;

  
  }
}

export default Dashboard;
