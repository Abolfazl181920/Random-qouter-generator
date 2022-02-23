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
                console.log(advice);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return(
            <h1>App</h1>
        );
    }
}

export default App;