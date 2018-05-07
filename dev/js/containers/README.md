import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {editNote} from '../actions/NoteActions';
import {removeNote} from '../actions/NoteActions';
import {saveEdit} from '../actions/NoteActions';
import {cancelEdit} from '../actions/NoteActions';


class Note extends Component {
    
    editModel(note, i){
        return (
                <div className="Note" key={note.id} index={i} style={{backgroundColor: note.Color}}>
                    <div className = "editButtons">
                        
                        <i className="fa fa-check fa-2x" onClick={
                                () => this.props.saveEdit(note,
                                                            i,
                                                            document.getElementById('noteHeader').value,
                                                            document.getElementById('noteBody').value,
                                                            document.getElementById('noteColor').value
                                                            )
                            }></i>

                        <i className="fa fa-ban fa-2x" onClick={() => this.props.cancelEdit(note, i)}></i>
                    </div>
                    <div className="noteContents">
                        <input  type="text" id="noteHeader"  defaultValue={note.Header}></input>
                        <textarea  id="noteBody" rows="5" col="50" wrap="hard" defaultValue={note.Body}></textarea>
                    </div>
                    <div>
                    <input type="color" id="noteColor" name="noteColor" defaultValue={note.Color} />

                    </div>
                </div>
        );
    }

    noteModel(note, i){
        return (
                <div className="Note" key={note.id} index={i} style={{backgroundColor: note.Color}}>
                    <div className = "editButtons">
                        <i className="fa fa-edit fa-2x" onClick={() => this.props.editNote(note, i)}></i>
                        <i className="fa fa-trash fa-2x" onClick={() => this.props.removeNote(note, i)}></i>
                    </div>
                    <div className="noteContents">
                        <h2>{note.Header}</h2>
                        <p>{note.Body}</p>
                    </div>
                </div>
            );
    }

     renderNote(){  
         return this.props.notes.map((note, i) => {
             if(note.EditMode){
                return(this.editModel(note, i))
             }else{
                return(this.noteModel(note, i))
             }
        });
        
     }

     render() {
        return(
            <div>
                {this.renderNote()}
            </div>
        ); 
    }
}

// Get apps state and pass it as props to notes
//      > whenever state changes, the notes will automatically re-render
function mapStateToProps(state) {
    return {
        notes: state.notes,
    };
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            editNote: editNote,
            removeNote: removeNote,
            saveEdit: saveEdit,
            cancelEdit: cancelEdit
        },
         dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Note);
