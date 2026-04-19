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
                <Educational />
                <Experience />
            </main>
            <footer>
                <button>Submit</button>
                <button>Edit</button>
            </footer>
        </>
    )
}