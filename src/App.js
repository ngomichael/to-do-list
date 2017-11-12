import React, { Component } from 'react';
import './App.css';
import CreateListItem from './CreatListItem';
import FontAwesome from 'react-fontawesome';
// import faStyles from 'font-awesome/css/font-awesome.css';

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
    backgroundColor: '#33cccc',
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

const outsideInputStyle = {
    position: 'relative',
    left: '15px',
    bottom: '15px'
};

const borderStyle ={
    position: 'relative',
    top: '60px',
    left: '33%',
    height: '500px',
    width: '500px',
    border: '1px solid #85e0e0',
    borderRadius: '40px',
    backgroundColor: '#85e0e0',
    opacity: '0.5',
};

const divItemsStyle = {
    position: 'relative',
    right: '100px',
    bottom: '500px',
    fontFamily: 'Roboto',
    fontWeight: '500',
};

function lineOut(width) {
    const lineOutStyles = {
        width: width,
        height: '20px',
        backgroundColor: 'purple'

    };

    return lineOutStyles;
}



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
        this.crossOut = this.crossOut.bind(this);
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
            input: '',
            lineOutWidth: 0
        })
    }

    crossOut() {
        this.setState({
            lineOutWidth: 20
        })
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            alert('Enter clicked!!!');
        }

    }

    render() {
        let divItems = this.state.items.map((item, index) => {
           return <li onClick={this.crossOut} key={index}> {item}</li>
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
                            <input id="input" autoFocus  value={this.state.input} onKeyPress={this.handleKeyPress} onChange={this.updateInput} style={inputStyle} placeholder="Example: Go buy milk"/>
                        </div>

                        <div style={buttonStyle} type="submit" onClick={this.createNewItem}>Add Items</div>
                    </div>

                    <div style={borderStyle}></div>

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