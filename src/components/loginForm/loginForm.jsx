import './loginForm.css'
import { toast } from "react-toastify";

const LoginForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value.trim();
        const pass = form.password.value.trim();

        const lettersAndNumbers = /^[a-zA-Z0-9]+$/;
        const allowedCharsForPassword = /^[a-zA-Z0-9!@#$%&?]+$/;

        if (!lettersAndNumbers.test(name)) {
            toast.warn("The username may only contain letters or numbers");
            return;
        }

        if (!allowedCharsForPassword.test(pass)) {
            toast.warn(
                "The password may only contain letters, numbers or any of the following chars: !, @, #, $, %, &, ?"
            );
            return;
        }

        console.log(`User ${name} logged in!`);
        toast.info(`You've logged in as ${name}`);
    };

    const onTextChanged = (e) => {

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