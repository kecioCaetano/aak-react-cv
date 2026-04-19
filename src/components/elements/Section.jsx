import { useState } from 'react'
import SectionTitle from './Section-title'
import InputFields from './input-fields'
import PrintView from './Print-view'
import SectionButtons from './Section-buttons'


export default function Section({ initialData, title, mode, rootMode, setMode, keyData }) {

    const [data, setData] = useState(initialData)
    const className = `section__${title.split(' ').join('-').toLowerCase()}`

    function handleChange(key) {
        // don't forget to fill
        return (e) => {
            setData(
                data.map((oldData) => {
                    if (oldData.key === key) {
                        oldData.value = e.target.value
                    }
                    return oldData
                })
            )
        }
    }

    return (
        <section className={`section ${className}`}>
            <SectionTitle title={title}></SectionTitle>

            {
                mode === "edit"
                    ? (<InputFields handleChange={handleChange} data={data}></InputFields>)
                    : <PrintView data={data}></PrintView>
            }

            {
                rootMode === 'edit'
                    ?
                    (
                        <SectionButtons
                            state={mode}
                            turnEditOn={() => setMode(keyData, "edit")}
                            submit={() => setMode(keyData, "submit")}  >
                        </SectionButtons>
                    )
                    : null
            }
        </section>
    )
}