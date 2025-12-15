import './loginForm.css'
import { toast } from "react-toastify";

const LoginForm = ( { setName, setPass } ) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;

        setName(name);
        setPass(form.password.value);

        toast.info("You've logged as", name);
        console.log(`User ${name} logged in!`);
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="formRow">
                    <textarea
                        className='textarea'
                        required
                        type='text'
                        id='name'
                        rows={1}
                        placeholder='🙎 Username...'
                        maxLength={15}
                        minLength={5}
                    >
                    </textarea>
                </div>
                <div className="formRow">
                    <textarea
                        className='textarea'
                        required
                        type='text'
                        id='password'
                        rows={1}
                        placeholder='🔒 Password...'
                        maxLength={10}
                        minLength={5}
                    >
                    </textarea>
                </div>

                <div className="formRow">
                    <button className="submit" type='submit'>Login/Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm