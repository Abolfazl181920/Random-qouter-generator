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
                    <h1 className="advice"> { advice } </h1>
                    <button onClick={this.fetchData} className="button">
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;