import React, { Component } from 'react';
import './App.css';
import airplane from './planes.png';

const appStyle = {
    textAlign: 'center',
};

const headerStyle = {
    backgroundColor: '#222',
    height: '100px',
    padding: '20px',
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: '900',
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
    backgroundColor: '#02BEC4',
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontWeight: '900',
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
    flexDirection: 'column',
    position: 'relative',
    top: '70px',
};

const borderStyle ={
    position: 'relative',
    top: '60px',
    left: '33%',
    height: '500px',
    width: '500px',
    border: '1px solid #85e0e0',
    borderRadius: '40px',
    backgroundColor: '#BADDD6',
};

const divItemsStyle = {
    position: 'relative',
    left: '50px',
    bottom: '700px',
    fontFamily: 'Roboto',
    fontWeight: '500',
    width: '500px',
};

const airplaneStyle = {
    opacity: '0.8',
    position: 'relative',
    left: '1000px',
    bottom: '90px',
    height: '200px',
    width: '400px'
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            input: '',
            lineOutWidth: 0
        };
        this.updateInput = this.updateInput.bind(this);
        this.createNewItem = this.createNewItem.bind(this);
    }

    //updates the value of the input on every change
    updateInput(event) {
        this.setState({
            input: event.target.value
        });
    }

    //when 'Add Items' button is clicked a new item is added to the list
    createNewItem() {
        let value = this.state.input;
        let items = this.state.items;
        items.push(value);

        this.setState({
            items: items,
            input: '',
            lineOutWidth: 0
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
                            <input id="input" autoFocus  value={this.state.input} onKeyPress={this.handleKeyPress}
                                   onChange={this.updateInput} style={inputStyle} placeholder="Example: Go buy milk"/>
                        </div>

                        <div style={buttonStyle} type="submit" onClick={this.createNewItem}>Add Items</div>
                    </div>

                    <div style={borderStyle}></div>
                    <img style={airplaneStyle} src={airplane}/>

                    <div style={listItemStyle}>
                        <ul style={divItemsStyle}>
                            {divItems}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;