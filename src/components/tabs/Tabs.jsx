import './Tabs.css'
import { useState } from 'react';

export const SimpleTab = ( { titles, value, setValue } ) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const changeSelectedIndex = (newIndex) => {

        if (newIndex === value) { return; }

        setSelectedIndex(newIndex);
        setValue(Number(newIndex));
    }

    return (
        <>
            <div className="tabContainer">
                {titles.map((title, i) => (
                        <TabButton
                            key={title}
                            id={i}
                            text={title}
                            active={selectedIndex === i}
                            titles={titles}
                            changeSelectedIndex={changeSelectedIndex}
                        />
                ))}
            </div>
        </>
    );
};

const TabButton = ( { id, text, active, changeSelectedIndex, color } ) => {
    return (
        <>
            <button
                className="tabButton"
                style={{
                    borderBottom: active ? `1px solid ${color ?? 'white'}` : `1px solid #1e1e1e`,
                    color: color ?? "white"
                }}
                onClick={() => changeSelectedIndex(id)}
            >
                <h1>{text}</h1>
            </button>
        </>
    );
};