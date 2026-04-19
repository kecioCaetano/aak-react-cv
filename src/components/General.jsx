import Section from './elements/Section'

const initialData = [
    { key: 0, value: '', title: 'First name' },
    { key: 1, value: '', title: 'Last name' },
    { key: 2, value: '', title: 'Phone number', type: 'tel' },
    { key: 3, value: '', title: 'E-mail', type: 'email' },
]

export default function General({ setMode, mode, rootMode }) {
    return (
        <Section
            setMode={setMode}
            mode={mode}
            rootMode={rootMode}
            title='General information'
            initialData={initialData}
            keyData={0}>

        </Section>
    )
}

{/* <label>
                First name: {' '}
                <input placeholder="Ex.: Paul" />
            </label>
            <label>
                Last name: {' '}
                <input placeholder="Ex.: Smith" />
            </label>
            <label>
                Phone number: {' '}
                <input placeholder="4752455871" />
            </label>
            <label>
                E-mail: {' '}
                <input placeholder="Paul@email.com" />
            </label> */}