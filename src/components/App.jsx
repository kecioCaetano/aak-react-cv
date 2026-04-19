import { useState } from "react";
import General from './General'
import Educational from './Educational'
import Experience from './Experience'
import '../styles/app.css'

const initialStates = {
    0: 'edit',
    1: 'edit',
    2: 'edit',
}

export default function App() {
    const [states, setStates] = useState(initialStates)
    const [rootMode, setRootMode] = useState('edit')

    function setMode(key, mode) {
        setStates({ ...states, [key]: mode, })
    }

    function setModeAll(mode) {
        setRootMode(mode)
        setStates((prev) => Object.keys(prev).reduce((newStates, key) => {
            newStates[key] = mode
            return newStates
        }, {})
        )
    }

    return (
        <>
            <header className="header__title-wrapper">
                <h1>Résumé generator</h1>
            </header>
            <main>
                <General
                    rootMode={rootMode}
                    setMode={setMode}
                    mode={states[0]} />
                <Educational
                    setMode={setMode}
                    rootMode={rootMode}
                    mode={states[1]} />
                <Experience
                    setMode={setMode}
                    rootMode={rootMode}
                    mode={states[2]} />
            </main>
            <footer className="footer">
                <div className="footer__buttons-wrapper">
                    <button onClick={() => setModeAll('submit')}>Submit</button>
                    <button onClick={() => setModeAll("edit")}>Edit</button>
                </div>
            </footer>
        </>
    )
}