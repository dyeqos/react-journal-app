import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesom title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                >

                </textarea>
                <div className="notes__image">
                    <img
                        src="https://cdn.alfabetajuega.com/wp-content/uploads/2020/07/kurama-naruto.jpg?width=1200&aspect_ratio=1200:631"
                        alt="imagen"
                    />

                </div>

            </div>
        </div>
    )
}
