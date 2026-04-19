export default function CustomInput({
    label,
    onChange=false,
    placeholder='',
    type='text',
    dataKey,
    value,}){

    const formatedId = label.split(' ').join('-').toLowerCase()
    const id = `input__${formatedId}`
    return(
        <div className="section__input-wrapper">
            <label className="input__label" htmlFor={id}>
                {label}
            </label>
            <input 
                className="section__input"
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange ? onChange(dataKey) : null} 
            />
        </div>
    )
}