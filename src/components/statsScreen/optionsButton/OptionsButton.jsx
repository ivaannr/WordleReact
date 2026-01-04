import { useEffect, useState } from 'react';
import './OptionsButton.css'

const OptionsButton = ({ options }) => {
    const [index, setIndex] = useState(0);
    const [color, setColor] = useState('#0084ff');
    const COLORS = ['#0084ff', '#34be3b', '#ff3131', '#ff9300', ];

    useEffect(() => setColor(COLORS[index]), [index]);

    const increaseIndex = () => setIndex(i => i + 1);
    const decreaseIndex = () => setIndex(i => i - 1);

    const ensureCorrectIndex = (i) => {
        if (i + 1 > options.length - 1) {
            setIndex(0);
            return false;

        } else if (i - 1 < 0) {
            setIndex(options.length - 1)
            return false;
        }

        return true;
    };

    const handleClick = (e) => {
        e.preventDefault();

        if (!ensureCorrectIndex(index)) { return; }

        if (e.button === 0) {
            increaseIndex();
            return;
        }

        if (e.button === 2) {
            decreaseIndex();
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