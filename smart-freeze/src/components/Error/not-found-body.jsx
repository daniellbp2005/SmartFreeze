import React from 'react'
import css from './error.css'
function Error() {
    return (
        <div className="body404">
            <div id='notfound'>
                <div className='notfound'>
                    <div className='notfound-404'>
                        <h1 id='h1404'>404</h1>
                        <h2 id='h2404'>Page not found</h2>

                    </div>
                    <a id='errorbutton' href="/">Return To Home</a>
                </div>

            </div>
        </div>
    )
}

export default Error