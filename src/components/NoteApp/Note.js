import React, { Component } from 'react'

export default class Note extends Component {
    clickHandler(id){
        this.props.onRemove(id)
    }
    
    
    render() {
        let {id  , title , color} = this.props
        return (
            <div onClick={this.clickHandler.bind(this , id)} className="card shadow-sm rounded"  style={{ backgroundColor:color }}><p className="card-text p-3">{title}</p></div>
        )
    }
}
