import React, { Component } from 'react';

const listItemStyle = {
    fontSize: '30px'
}

class CreateListItem extends Component {
    render() {
        return(
            <div>
                <li style={listItemStyle}>{this.props.listItem}</li>
            </div>
        )
    }
}

export default CreateListItem;