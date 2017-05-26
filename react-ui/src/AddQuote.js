import React, { Component }
from 'react';
import './App.css';

class AddQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {author: '', description: ''};

        this.sendQuote = this.sendQuote.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    sendQuote(event) {
        
        var quote = {author: this.state.author,
            description: this.state.description};

        fetch('/api/add', {
            method: 'POST',
            body: JSON.stringify(quote),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
                <div>
                    <h2>Add new quote</h2>
                    <div>
                        <label for="author">Author</label>
                        <input type="text" id="author" name="author" onChange={this.handleInputChange}/>
                        <br/>
                        <label for="description">Quote</label>  
                        <input type="text" id="description" name="description" onChange={this.handleInputChange}/>
                        <br/>
                        <input type="button" value="Submit" onClick={this.sendQuote}/>
                
                    </div>
                </div>
                );
    }
}

export default AddQuote;