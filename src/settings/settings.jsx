import React, { useEffect } from "react";
import './settings.css'

function changeLang(lang, setLanguage) {
    switch (lang) {
        case "es":
            setLanguage("en");
            break;
        case "en":
            setLanguage("es");
            break;
        default:
            setLanguage("en");
    }
}

export default function Settings(props) {

    const handleLangChange = () => {
        changeLang(props.language, props.setLanguage);
    };

    useEffect(() => {
        console.log("Idioma actual:", props.language);
    }, [props.language]);

    return (
        <div className="settings">
            <h1>Settings</h1>
            <div className="settingsBox">
                <div className="settingsRow">
                    <h3>Language:</h3>
                    <button onClick={handleLangChange}>
                        Current language: {props.language === "en" ? "English" : "Español"}
                    </button>
                </div>
            </div>
        </div>
    );
}
