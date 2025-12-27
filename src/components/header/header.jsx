import React from "react";
import './header.css'

import statsIcon from '../../assets/STATS_ICON.png';
import userIcon from '../../assets/USER_ICON.png';
import settingsIcon from '../../assets/SETTINGS_ICON.png';
import multiplayerIcon from '../../assets/MULTIPLAYER_ICON.png';
import multiplayerOffIcon from '../../assets/MULTIPLAYER_OFF_ICON.png';
import replayIcon from '../../assets/REPLAY_ICON.png';

export default function Header({
    openSettingsModal,
    enableMultiplayer,
    openLoginModal,
    isMultiplayer,
    disableMultiplayer,
    resetGame
}) {

    const changeMultiplayer = () => {
        if (!isMultiplayer) {
            enableMultiplayer();
        } else {
            disableMultiplayer();
        }
    };

    return (
        <div id="header">
            <div className="menu">

                <button type="button">
                    <img src={statsIcon} height={25} />
                </button>

                <button type="button" onClick={resetGame}>
                    <img src={replayIcon} height={25} />
                </button>

                <h1>Wordle</h1>

                <button type="button" onClick={openSettingsModal}>
                    <img src={settingsIcon} height={25} />
                </button>

                <button type="button" onClick={changeMultiplayer}>
                    <img
                        src={isMultiplayer ? multiplayerOffIcon : multiplayerIcon}
                        height={25}
                        alt="Multiplayer toggle"
                    />
                </button>

            </div>
            <hr />
        </div>
    );
}
