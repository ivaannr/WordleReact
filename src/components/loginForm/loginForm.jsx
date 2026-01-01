import './loginForm.css'
import { toast } from "react-toastify";
import { registerUser, userExists } from '../../helper.fetching';
import { useNavigate } from 'react-router-dom';

const LoginForm = ( { setUser } ) => {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {

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

        const user = {
            id: '',
            username: name,
            password: pass,
            wordsGuessed: 0,
            wordsMissed: 0,
            ELO: 1000,
            wins: 0,
            losses: 0
        };

        const existingUser = await userExists(user);

        if (existingUser) {
            
            setUser(existingUser);
            toast.info(`Logging in as ${user.username}...`);
            console.log(`User has logged in as ${user.username}`);
            navigate("/");
            return;
        }

        const response = await registerUser(user);

        console.log('Response:', response);
        console.log(`User ${name} logged in!`);
        toast.info(`You've logged in as ${name}`);
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
                        maxLength={14}
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
                        maxLength={14}
                        minLength={5}
                    >
                    </textarea>
                </div>

                <div className="formRow">
                    <button className="submit" type='submit'>Login/Register</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm