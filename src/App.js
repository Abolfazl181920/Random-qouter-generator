import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {

    state = { advice: '' };


    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {

        const { advice } = this.state;

        return (
            <div className="App">
                <div className="card">
                    <h1> { advice } </h1>
                </div>
            </div>
        );
    }
}

export default App;