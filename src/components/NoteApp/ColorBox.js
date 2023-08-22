import React, { Component } from 'react'

export default class ColorBox extends Component {

    clickHandler(color){
        this.props.onColor(color)
        console.log(color);
    }

    render() {
        return (
            <div className='color-box' onClick={this.clickHandler.bind(this ,this.props.color)}  style={{backgroundColor:this.props.color}}>
                
            </div>
        )
    }
}
