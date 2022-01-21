import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'

const NotePage = ({ match, history }) => {

    let noteId = match.params.id;
    let [note, setNote] = useState(noteId)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async() => {
        if (noteId === 'new') return
        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async() => {
        fetch(`/api/notes/${noteId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async() => {
        fetch(`/api/notes/${noteId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        history.push('/')
    }

    let createNote = async() => {
        fetch(`/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
        })
    }

    let handleSubmit = () => {
        if (noteId !== 'new' && note.body === '') {
            deleteNote()
        } else if (noteId !== 'new') {
            updateNote()
        } else if (noteId === 'new' && note.body !== null) {
            createNote()
        }
        history.push('/')
    }

    return ( <
        div className = 'note' >
        <
        div className = 'note-header' >
        <
        h3 >
        <
        ArrowLeft onClick = { handleSubmit }
        />  < /
        h3 > {
            noteId !== 'new' ? ( <
                button onClick = { deleteNote } > Delete Note < /button>
            ) : ( <
                button onClick = { handleSubmit } > Done < /button>
            )
        }

        <
        /div> <
        textarea onChange = {
            (e) => { setNote({...note, 'body': e.target.value }) }
        }
        value = { note.body }
        />  < /
        div >
    )
};

export default NotePage;