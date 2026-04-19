import Section from "./elements/Section"

const INITIAL_DATA = [
    { key: 0, value: '', title: 'School name' },
    { key: 1, value: '', title: 'Title of study' },
    { key: 2, value: '', title: 'From', type: 'date' },
    { key: 3, value: '', title: 'to', type: 'date' },
]
export default function Educational({ setMode, rootMode, mode }) {
    return (
        <Section
            setMode={setMode}
            mode={mode}
            rootMode={rootMode}
            keyData={1}
            initialData={INITIAL_DATA}
            title='Educational Experience'
        />
    )
}