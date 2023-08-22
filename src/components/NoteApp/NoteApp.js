import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }
        this.notTitleHandler= this.notTitleHandler.bind(this)
        this.changeInputColor= this.changeInputColor.bind(this)
        this.emptyHandler = this.emptyHandler.bind(this)
        this.addNote = this.addNote.bind(this)
        this.clickRemoveHandler = this.clickRemoveHandler.bind(this)
    }


  

    addNote(){
        let newNotesObj={
            id:this.state.notes.length+1,
            title:this.state.noteTitle,
            color: this.state.inputColor
        }
        this.setState(prevstate =>{
            return{
                notes:[...prevstate.notes , newNotesObj],
                inputColor:"#fff",
                noteTitle:''
            }
        })
    }
    notTitleHandler(event){
        this.setState({
            noteTitle: event.target.value
        })
    }


    changeInputColor(color){
        console.log(color);
        this.setState({
            inputColor:color
        })
    }
    emptyHandler(){
        this.setState({
            noteTitle: '',
            inputColor:'#fff'
        })
    }

    clickRemoveHandler(id){
         let newNoteFillter = this.state.notes.filter(note => note.id !== id)
         this.setState({
            notes:newNoteFillter
         })
         console.log(newNoteFillter);
    }

    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">SabzLearn Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input id="input-field" className="form-control" type="text" style={{backgroundColor:this.state.inputColor}} value={this.state.noteTitle} onChange={this.notTitleHandler} placeholder="Something here..." />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map(color=>(

                                            <ColorBox key={color} color={color} onColor={this.changeInputColor} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button onClick={this.addNote} id="btn-save" type="button" className="btn btn-outline-info"><span className="fa fa-plus" ></span></button>
                                        <button id="btn-delete" onClick={this.emptyHandler} type="button" className="btn btn-outline-danger"><span id="btn-icon"
                                            className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                                {this.state.notes.map( note =>(
                                                    <Note key={note.id} onRemove={this.clickRemoveHandler} {...note}/>

                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>
                </div>
            </>
        )
    }
}
