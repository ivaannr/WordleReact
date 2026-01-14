import './loginForm.css'
import { toast } from "react-toastify";
import { registerUser, userExists } from '../../helper.fetching';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import PhotoInput from './photoInput/PhotoInput';

const LoginForm = () => {

    const { user, setUser } = useContext(UserContext);
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const logOut = () => {
        if (!user) { return; }
        setUser(null);
        setFile(null);
    }

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = (error) => reject(error);
        });
    };

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
            losses: 0,
            profilePicture: file ? await getBase64(file) : null
        };

        const existingUser = await userExists(user);

        if (existingUser) {

            setUser(existingUser);
            toast.success(`Logging in as ${existingUser.username}...`);
            console.log(`User ${existingUser.username} logged in with id ${existingUser.id}!`);
            navigate("/");
            return;
        }

        const player = await registerUser(user);

        if (!player) {
            toast.error("Registration failed");
            return;
        }

        console.log({ player });

        setUser(player);

        console.log(`User ${name} logged in with id ${player.id}!`);
        toast.success(`Welcome ${player.username}!`);
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
                    <PhotoInput file={file} setFile={setFile} />
                </div>

                <div className="formRow">
                    <button className="submit login" type='submit'>Login/Register</button>
                    <button
                        className="submit logout"
                        type='button'
                        disabled={!user}
                        onClick={logOut}
                    >
                        Log out
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm