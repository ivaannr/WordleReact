import React from "react";
import './header.css'

export default function Header( { openSettingsModal } ) {
    return (
        <div id="header">
            <div className="menu">
                <button>
                    <img src="src\assets\USER_ICON.png" height={25}></img>
                </button>
                <h1>Wordle</h1>
                <button onClick={() => openSettingsModal()}>
                    <img src="src\assets\SETTINGS_ICON.png" height={25}></img>
                </button>
            </div>
            <hr />
        </div>
    );
}