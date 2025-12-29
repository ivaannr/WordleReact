import './Stats.css'
import { StatsHeader } from '../header/header';
import { UserContext } from '../../context/UserContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import StatRow from './statRow/StatRow';
import winIcon from '../../assets/MEDALS_ICON.png';
import percentIcon from '../../assets/PERCENT_ICON.png';
import gamesIcon from '../../assets/SWORDS_ICON.png';
import missIcon from '../../assets/CROSS_ICON.png';
import crownIcon from '../../assets/CROWN_ICON.png';
import skullIcon from '../../assets/SKULL_ICON.png';

const StatsScreen = () => {
    const { user, setUser } = useContext(UserContext);

    const icons = [gamesIcon, crownIcon, missIcon, winIcon, skullIcon, percentIcon];
    const winLosePercentage = Number( (Number(user?.multiplayerWins) / Number(user?.multiplayerLosses)) * 100 );
    const totalMatches = user?.wordsGuessed + user?.wordsMissed + user?.multiplayerWins + user?.multiplayerLosses; 
    const values = [totalMatches, user?.wordsGuessed, user?.wordsMissed, user?.multiplayerWins, user?.multiplayerLosses, `${winLosePercentage}%`];
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
                    <div className="pictureBox">
                        <img src={null} height={250} />
                    </div>

                    <div className="mainInfo">
                        <p>{user?.username ?? "User0123456789"} {user?.elo ?? 1000}</p>
                    </div>
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
                            <div className='container'>
                                {
                                    [
                                        "Games Played", "Words Guessed", "Words Missed",
                                        "Multiplayer Wins", "Multiplayer Losses", "Win/Lose %"
                                    ].map((field, index) =>
                                    (
                                        <>
                                            <StatRow key={field} icon={icons[index]} title={field} value={values[index] ?? 0} />
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsScreen;