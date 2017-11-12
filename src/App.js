import React, { Component } from 'react';
import './App.css';
import CreateListItem from './CreatListItem';

const appStyle = {
    textAlign: 'center',
};

const headerStyle = {
    backgroundColor: '#222',
    height: '100px',
    padding: '20px',
    color: 'white'
};

const appTitle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3em',
};

const buttonStyle = {
    display: 'flex',
    position: 'relative',
    left: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '3em',
    width: '10em',
    borderRadius: '3px',
    backgroundColor: 'blue',
    cursor: 'pointer',
};

const inputStyle = {
    height: '2em',
    width: '20em',
    fontSize: '20px',
};

const inputAndButtonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '30px',
};

const listItemAndInputAndButtonContainer = {
    display: 'flex',
    flexDirection: 'column',
};

const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '70px'
};

let array = ['Cookie', 'Milk'];

const listItems = array.map((number) =>
    <li>{number}</li>
);


class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            input: ''
        };
        this.updateInput = this.updateInput.bind(this);
        this.createNewItem = this.createNewItem.bind(this);
    }

    updateInput(event) {
        this.setState({
            input: event.target.value
        });
    }

    createNewItem() {
        let value = this.state.input;
        let items = this.state.items;
        items.push(value);

        this.setState({
            items: items,
            input: ''
        })
    }


    render() {
        let divItems = this.state.items.map((item, index) => {
           return <li key={index}> {item}</li>
        });

        return (
            <div>
                <div style={appStyle}>
                    <header style={headerStyle}>
                        <h1 style={appTitle}>What do you need to do today?</h1>
                    </header>
                </div>

                <div style={listItemAndInputAndButtonContainer}>
                    <div style={inputAndButtonContainerStyle}>
                        <div>
                            <input id="input" value={this.state.value} onChange={this.updateInput} style={inputStyle} placeholder="Item"/>
                        </div>

                        <div style={buttonStyle} onClick={this.createNewItem}>Add Item</div>
                    </div>

                    <div>
                        <ul>
                            {divItems}
                        </ul>
                        {this.state.input}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;