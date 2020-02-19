import React, { useState } from 'react'
import '../styles/index.css'
import TitleChanger from './TitleChanger'

function NotesList(props) {
	return(
		<div className='list'>
            {props.notes.map(note =>
                <Note 
                    showNote={props.showNote}
                    note={JSON.parse(localStorage.getItem(note))}
                    deleteNote={props.deleteNote}
                    titleHandlers={props.titleHandlers}
                />
            )}
            <input className='add-button' value='+' type='button' onClick={(e) => props.addNote(e)} />
		</div>
	);
}

function Note(props) {
    return(
        <div className='note'>
            <div className='title-bar'>
                {<TitleChanger 
                    titleHandlers={props.titleHandlers}
                    note={props.note}
                />}
                
                <input className='delete-button' value='x' type='button' 
                    onClick={(e) => props.deleteNote(e, props.note.id)} 
                />
            </div>
            <input className='show-button' type='button' 
                onClick={(e) => props.showNote(e, props.note.id)} />
        </div>
    );
}

export default NotesList