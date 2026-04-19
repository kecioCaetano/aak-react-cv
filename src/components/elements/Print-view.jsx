export default function PrintView({ data }) {
    return (
        <div className="no-edit-section">
            {data.map((d) => {

                return (
                    <div className="no-edit-section__data-wrapper" key={d.key}>
                        <h3>{d.title}</h3>
                        <p>
                            {d.value === '' ? "No" : d.value}
                        </p>
                    </div>
                )

            })}

        </div>
    )
}