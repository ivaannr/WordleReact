import './textfield.css'

const LengthTextfield = ({ id, name, setValue, text, placeholder }) => {

    const onTextChange = (e) => {
        let value = e.target.value;

        const regex = /[^1-9]/;

        if (regex.test(value)) {
            value = value.replace(regex, '');
            e.target.value = value;
        }

        if (value === '' || value == null) {
            setValue(5);
            return;
        }

        let length = Number(value);
        if (length > 9 || length < 3) {

            e.target.value = 5;
            setValue(5);
            return;
        }

        setValue(length);
    };

    return (
        <>
            <label htmlFor={name}>{text}</label><br />
            <textarea itemType='number' id={id} rows="1" placeholder={placeholder} onChange={onTextChange}></textarea>
        </>
    );
}

export { LengthTextfield };