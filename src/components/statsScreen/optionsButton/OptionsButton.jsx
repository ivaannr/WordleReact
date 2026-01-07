import { useEffect, useState } from 'react';
import './OptionsButton.css'
import { useNavigate } from 'react-router-dom';

const OptionsButton = ({ options, setValue, active = true }) => {
    const [index, setIndex] = useState(0);
    const [color, setColor] = useState('#0084ff');
    const [colorIndex, setColorIndex] = useState(0);
    const COLORS = ['#0084ff', '#34be3b', '#ff3131', '#ff9d14ff'];

    const navigate = useNavigate();

    const goLogin = () => navigate('/login');

    useEffect(() => {
        ensureCorrectIndex(index);

        const newColorIndex = getRandomIndexWithExclusion(COLORS, colorIndex);
        setColorIndex(newColorIndex);
        setColor(COLORS[newColorIndex]);

        setValue(index);

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
            {active ? (
                <>
                    <button
                        className='options'
                        onMouseDown={handleClick}
                        onContextMenu={(e) => e.preventDefault()}
                        style={{ backgroundColor: color }}
                    >
                        {options[index]}
                    </button>
                </>
            ) : (
                <button
                    className='options'
                    onMouseDown={goLogin}
                    onContextMenu={(e) => e.preventDefault()}
                    style={{ backgroundColor: "gray" }}
                >
                    Login
                </button>
            )}
        </>
    );
};

/**
 * Retrives a random index different from the one passed as param
 * @param {Array} arr The array to get the index from 
 * @param {Number} excludedIndex the index that is wanted to be excluded
 * @returns {Number} the index randomdly picked
 */
function getRandomIndexWithExclusion(arr, excludedIndex) {
    if (arr.length <= 1) {
        throw new Error("Array's length must be greater than 1.");
    }

    let rd = excludedIndex;
    do {
        rd = Math.floor(Math.random() * arr.length);
    } while (rd === excludedIndex);

    return rd;
}



export default OptionsButton;