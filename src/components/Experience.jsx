import Section from "./elements/Section"

const INITIAL_DATA = [
    { key: 0, value: "", title: "Company name" },
    { key: 1, value: "", title: "Position title" },
    { key: 3, value: "", title: "From", type: "date" },
    { key: 4, value: "", title: "to", type: "date" },
    { key: 2, value: "", title: "Main responsibilities" },
];

export default function Experience({ setMode, rootMode, mode }) {
    return (
        <Section
            setMode={setMode}
            mode={mode}
            rootMode={rootMode}
            keyData={2}
            initialData={INITIAL_DATA}
            title='Practical experience'
        />
    )
}