import React, { Component } from 'react';
import './style.css';

class MaskerContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { show = false, bgClick = () => { }, bgStyle = {} } = this.props;
        return (
            <div className='mask-container' style={{ display: show ? 'block' : 'none' }}>
                <div className='mask-bg' style={bgStyle} onClick={() => bgClick()} ></div>
                {this.props.children}
            </div>
        );
    }
}

export default MaskerContainer;