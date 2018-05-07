# Example Action taken from NoteSpace

export const addNote = () => {
    return {
        type: 'NOTE_ADD'
    }
};

export const editNote = (note, i) => {
    return {
        type: 'NOTE_EDIT',
        payload: note,
        index: i
    }
};

export const removeNote = (note, i) => {
    return {
        type: 'NOTE_REMOVE',
        payload: note,
        index: i
    }
};

export const saveEdit = (note, i, header, body, color) => {
    return {
        type: 'EDIT_SAVE',
        payload: note,
        index: i,
        header,
        body,
        color
    }
};

export const cancelEdit = (note, i) => {
    return {
        type: 'EDIT_CANCEL',
        payload: note,
        index: i
    }
};

export const clearNotes = () =>{
    return{
        type: 'CLEAR_ALL'
    }
};