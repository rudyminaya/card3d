import { useState } from 'react'
import './app.scss'

const App = () => {
    const [isFlip, setIsFlip] = useState(false)
    return (
        <>
            <div className="container">
                <div className={`card ${isFlip ? 'flipped' : ''}`}>
                    <button
                        className="actionFlip"
                        onClick={() => setIsFlip(!isFlip)}
                    >
                        flip
                    </button>
                </div>
                <div className={`card ${isFlip ? '' : 'flipped'}`}>
                    <button
                        className="actionFlip"
                        onClick={() => setIsFlip(!isFlip)}
                    >
                        unFlip
                    </button>
                </div>
            </div>
        </>
    )
}

export default App
