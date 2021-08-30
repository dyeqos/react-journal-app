import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://m.media-amazon.com/images/I/81giKWQ6l9L._AC_SX679_.jpg)'
                }}
            >

            </div>
            <div className="journal__entry-body">

                <p className="journal__entry-title">
                    buen dia
                </p>
                <p className="journal__entry-content">
                    loren loren loren asdf as df asdfsda ggg.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span> monday</span>

            </div>
        </div>
    )
}
