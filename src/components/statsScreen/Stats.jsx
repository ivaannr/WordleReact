import './Stats.css'
import { StatsHeader } from '../header/header';
import { UserContext } from '../../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { SimpleTab } from '../tabs/Tabs';
import { fetchTopUsers } from '../../helper.fetching';
import { toast } from 'react-toastify';
import StatRow from './statRow/StatRow';
import winIcon from '../../assets/MEDALS_ICON.png';
import percentIcon from '../../assets/PERCENT_ICON.png';
import gamesIcon from '../../assets/SWORDS_ICON.png';
import missIcon from '../../assets/CROSS_ICON.png';
import crownIcon from '../../assets/CROWN_ICON.png';
import skullIcon from '../../assets/SKULL_ICON.png';
import fav from '../../assets/favicon.png';
import UsersTable from './usersTable/UsersTable';

const StatsScreen = () => {
    const [filterDescending, setFilterDescending] = useState(true);
    const [currentFilter, setCurrentFilter] = useState("wins");
    const [numberOfPlayers, setNumberOfPlayers] = useState(5);
    const [playersData, setPlayersData] = useState([]);
    const { user, setUser } = useContext(UserContext);

    const icons = [gamesIcon, crownIcon, missIcon, winIcon, skullIcon, percentIcon];

    const [values, setValues] = useState([]);

    const navigate = useNavigate();
    const logged = user != null;

    const toggleDescending = () => setFilterDescending(descending => !descending);

    useEffect(() => {
        console.log(user != null ? "logged in" : "not logged in");
        if (!logged) {
            toast.warn("You haven't logged in.");
        }
    }, []);

    useEffect(() => {
        const loadTopUsers = async () => {
            try {
                const playersData = await fetchTopUsers(numberOfPlayers, currentFilter, filterDescending);
                setPlayersData(playersData);
            } catch (ex) {
                console.log(ex);
            }
        };

        loadTopUsers();

    }, [numberOfPlayers, currentFilter, filterDescending]);

    useEffect(() => {
        const winLosePercentage = (((Number(user?.wins) / Number(user?.losses)) / Number(user?.totalMatches) ) * 100).toFixed(2);
        const totalMatches = user?.wordsGuessed + user?.wordsMissed + user?.wins + user?.losses;

        setValues([totalMatches, user?.wins, user?.losses, user?.wordsGuessed, user?.wordsMissed, `${isNaN(winLosePercentage) ? '0' : winLosePercentage}%`]);

    }, [user]);

    return (
        <>
            <StatsHeader user={user} />

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
                            <UsersTable users={playersData} setCurrentFilter={setCurrentFilter} toggleDescending={toggleDescending}/>

                        </div>
                        <div className="bottomStatsRightDiv">
                            <div className="statsTitleDiv">
                                <h1>Statistics</h1>
                            </div>
                            <div className='container'>
                                {
                                    [
                                        "Games Played", "Multiplayer Wins", "Multiplayer Losses",
                                        "Words Guessed", "Words Missed", "Win / Lose %"
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