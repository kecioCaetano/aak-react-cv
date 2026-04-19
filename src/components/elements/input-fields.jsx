import CustomInput from './custom-input'

export default function InputFields({handleChange, data}){
    return (
        <div className='section__inputs-wrapper'>
            {data.map((d) => {
                return (
                    <CustomInput
                        label={d.title}
                        value={d.value}
                        type={d.type}
                        onChange={handleChange}
                        dataKey={d.key}
                        key={d.key}
                    ></CustomInput>
                )
            })}
            
        </div>
    )
}