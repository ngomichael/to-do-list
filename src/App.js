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


class App extends Component {

    render() {
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
                            <input id="input" style={inputStyle} placeholder="Item"/>
                        </div>

                        <div style={buttonStyle} >Add Items</div>
                    </div>
                    <div style={listItemStyle}>
                        <CreateListItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;