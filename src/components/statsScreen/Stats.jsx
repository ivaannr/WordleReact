import './Stats.css'
import { StatsHeader } from '../header/header';
import { UserContext } from '../../context/UserContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import StatRow from './statRow/StatRow';
import playIcon from '../../assets/PLAY_CIRCLE_ICON.png';

const StatsScreen = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const logged = user != null;

    // useEffect(() => {
    //     if (!logged) {
    //         navigate("/");
    //         return;
    //     }
    // }, []);

    return (
        <>
            <StatsHeader />

            <div className="screen">
                <div className="profileDiv">

                </div>
                <div className="statsContainer">
                    <div className="topStatsDiv">

                    </div>
                    <div className="bottomStatsContainer">
                        <div className="bottomStatsLeftDiv">

                        </div>
                        <div className="bottomStatsRightDiv">
                            <div className="statsTitleDiv">
                                <h1>Statistics</h1>
                            </div>
                            <StatRow icon={playIcon} title={"hola"} value={"adio"} />
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsScreen;