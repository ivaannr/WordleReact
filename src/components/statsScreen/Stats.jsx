import './Stats.css'
import { StatsHeader } from '../header/header';
import { UserContext } from '../../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import StatRow from './statRow/StatRow';
import winIcon from '../../assets/MEDALS_ICON.png';
import percentIcon from '../../assets/PERCENT_ICON.png';
import gamesIcon from '../../assets/SWORDS_ICON.png';
import missIcon from '../../assets/CROSS_ICON.png';
import crownIcon from '../../assets/CROWN_ICON.png';
import skullIcon from '../../assets/SKULL_ICON.png';
import fav from '../../assets/favicon.png';
import Dropdown from '../dropdown/dropdown';
import UsersTable from './usersTable/UsersTable';
import { SimpleTab } from '../tabs/Tabs';

const users = [
    { id: 123, username: "User1234567890", wins: 2, losses: 5, totalMatches: 10 },
    { id: 124, username: "ivan", wins: 2, losses: 5, totalMatches: 1 },
    { id: 125, username: "arturito", wins: 2, losses: 5, totalMatches: 5 },
    { id: 126, username: "aron", wins: 2, losses: 5, totalMatches: 2 },
    { id: 127, username: "andres", wins: 2, losses: 5, totalMatches: 2 },
];

const StatsScreen = () => {
    const [numberOfPlayers, setNumberOfPlayers] = useState(5);
    const [playersData, setPlayersData] = useState([]);
    const { user, setUser } = useContext(UserContext);

    const winLosePercentage = (user?.multiplayerWins / user?.multiplayerLosses) * 100;
    const totalMatches = user?.wordsGuessed + user?.wordsMissed + user?.multiplayerWins + user?.multiplayerLosses;

    const values = [totalMatches, user?.wordsGuessed, user?.wordsMissed, user?.multiplayerWins, user?.multiplayerLosses, `${winLosePercentage}%`];
    const icons = [gamesIcon, crownIcon, missIcon, winIcon, skullIcon, percentIcon];

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
                        <img src={fav} height={250} />
                    </div>

                    <div className="mainInfo">
                        <p>{user?.username ?? "User0123456789"}</p>
                        <p>{user?.elo ?? 1000}</p>
                    </div>
                </div>
                <div className="statsContainer">
                    <div className="topStatsDiv">

                    </div>
                    <div className="bottomStatsContainer">
                        <div className="bottomStatsLeftDiv">
                            <div className="statsTitleDiv">
                                <h1>Leaderboards</h1>
                                <SimpleTab
                                    titles={[5, 10, 25, 50]}
                                    value={numberOfPlayers}
                                    setValue={setNumberOfPlayers}
                                />
                            </div>
                            <UsersTable users={users} />

                        </div>
                        <div className="bottomStatsRightDiv">
                            <div className="statsTitleDiv">
                                <h1>Statistics</h1>
                            </div>
                            <div className='container'>
                                {
                                    [
                                        "Games Played", "Words Guessed", "Words Missed",
                                        "Multiplayer Wins", "Multiplayer Losses", "Win / Lose %"
                                    ].map((field, index) => (
                                        <StatRow key={field} icon={icons[index]} title={field} value={values[index] ?? 0} />
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