import { useEffect, useState } from 'react';
import './OptionsButton.css'

const OptionsButton = ({ options }) => {
    const [index, setIndex] = useState(0);
    const [color, setColor] = useState('#0084ff');
    const COLORS = ['#0084ff', '#34be3b', '#ff3131', '#ff9d14ff', ];

    useEffect(() => {
        ensureCorrectIndex(index);
        setColor(COLORS[index]);
    }, [index]);

    const increaseIndex = () => setIndex(i => i + 1);
    const decreaseIndex = () => setIndex(i => i - 1);

    const ensureCorrectIndex = (i) => {
        if (i > options.length - 1) {
            setIndex(0);
        } else if (i < 0) {
            setIndex(options.length - 1) 
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        switch (e.button) {
            case 0: increaseIndex(); break;
            case 2: decreaseIndex(); break;
        }
    };

    return (
        <>
            <button
                className='options'
                onMouseDown={handleClick}
                onContextMenu={(e) => e.preventDefault()}
                style={{ backgroundColor: color}}
            >
                {options[index]}
            </button>
        </>
    );
};

export default OptionsButton;