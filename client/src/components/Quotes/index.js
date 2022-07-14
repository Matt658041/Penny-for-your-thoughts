import React from 'react';
import axios from 'axios';

export default class Quotes extends React.Component {
    state ={
        quotes: []
    }
    componentDidMount() {
        axios.get('https://world-of-quotes.p.rapidapi.com/v1/quotes/quote-of-the-day')
        .then(res =>{
            const quotes = res.data;
            this.setState({ quotes })
        })
    }
    render() {
        return (
        <ul>
            {
                this.state.quotes
                .map(quote => 
                    <li key= {quote.id}>{quote.name}</li>)
            }

        </ul>
        )
    }
}