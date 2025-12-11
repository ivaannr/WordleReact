import './dropdown.css'

const Dropdown = ({ options, id, name, setValue, value, text }) => {

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <label htmlFor={name}>{text}</label>
            <select id={id} name={name} value={value} onChange={handleChange}>
                {
                    options.map((o, index) => (
                        <option key={index} value={o}>{o}</option>
                    ))
                }
            </select>
        </>
    );
};



export default Dropdown;