export default function SectionButtons({ turnEditOn, submit, state }) {
    return (
        <div className="section__buttons-wrapper">
            <button type="button" onClick={submit} disabled={state != 'edit'} >Submit</button>
            <button type="button" onClick={turnEditOn}>Edit</button>
        </div>
    );
}

