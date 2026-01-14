import React from "react";
import './header.css'
import statsIcon from '../../assets/STATS_ICON.png';
import userIcon from '../../assets/USER_ICON.png';
import settingsIcon from '../../assets/SETTINGS_ICON.png';
import multiplayerIcon from '../../assets/MULTIPLAYER_ICON.png';
import multiplayerOffIcon from '../../assets/MULTIPLAYER_OFF_ICON.png';
import replayIcon from '../../assets/REPLAY_ICON.png';
import playIcon from '../../assets/PLAY_CIRCLE_ICON.png';
import userUnloggedIcon from '../../assets/USER_UNLOGGED_ICON.png';
import loggedNoPfpIcon from '../../assets/USER_LOGGED_NO_PFP_ICON.png';
import { useNavigate } from "react-router-dom";
import { convert64ToURL } from "../../helper";
import { toast } from 'react-toastify';


export default function Header({
    openSettingsModal,
    enableMultiplayer,
    openLoginModal,
    isMultiplayer,
    disableMultiplayer,
    resetGame,
    user
}) {

    const navigate = useNavigate();

    const goStats = () => navigate("/stats");
    const goLogin = () => navigate("/login");

    const changeMultiplayer = () => {
        
        if (!user) {
            toast.warn("You must login to play multiplayer.");
            return;
        }

        if (!isMultiplayer) {
            enableMultiplayer();
        } else {
            disableMultiplayer();
        }
    };

    return (
        <div id="header">
            <img
                src={!user ? userUnloggedIcon : !user.profilePicture ? loggedNoPfpIcon : (convert64ToURL(user?.profilePicture))}
                height={50}
                width={50}
                className="headerImg"
                title="Login/Register"
                onClick={goLogin}
            />

            <div className="menu">

                <button type="button" onClick={goStats}>
                    <img src={statsIcon} height={25} title="Player stats" />
                </button>

                <button type="button" onClick={resetGame}>
                    <img src={replayIcon} height={25} title="Replay" />
                </button>

                <h1>Wordle</h1>

                <button type="button">
                    <img src={settingsIcon} height={25} title="Soon... ⚙️" />
                </button>

                <button type="button" onClick={changeMultiplayer}>
                    <img
                        src={isMultiplayer ? multiplayerOffIcon : multiplayerIcon}
                        height={25}
                        alt="Multiplayer toggle"
                        title={!isMultiplayer ? "Play multiplayer" : "Disable Multiplayer"}
                    />
                </button>

            </div>
            <hr />
        </div>
    );
}

export const StatsHeader = ({ user }) => {
    const navigate = useNavigate();
    const goLogin = () => navigate("/login");

    return (
        <div id="header">

            <img
                src={!user ? userUnloggedIcon : !user.profilePicture ? loggedNoPfpIcon : (convert64ToURL(user?.profilePicture))}
                height={50}
                width={50}
                className="headerImg"
                title="Login/Register"
                onClick={goLogin}
            />
            
            <div className="menu">

                <button type="button" onClick={() => navigate("/")}>
                    <img src={playIcon} height={25} />
                </button>

                <h1>Statistics</h1>

                <button type="button">
                    <img src={settingsIcon} height={25} />
                </button>


            </div>
            <hr />
        </div>
    );
};

export const LoginHeader = () => {
    const navigate = useNavigate();

    return (
        <div id="header">
            <div className="menu">

                <button type="button" onClick={() => navigate("/stats")}>
                    <img src={statsIcon} height={25} />
                </button>


                <button type="button" onClick={() => navigate("/")}>
                    <img src={playIcon} height={25} />
                </button>

                <h1>Login</h1>

                <button type="button">
                    <img src={settingsIcon} height={25} title="Soon... ⚙️" />
                </button>


                <button type="button" >
                    <img src={multiplayerOffIcon} height={25} />
                </button>


            </div>
            <hr />
        </div>
    );
};