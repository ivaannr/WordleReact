import './Stats.css'
import { StatsHeader } from '../header/header';
import { UserContext } from '../../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { SimpleTab } from '../tabs/Tabs';
import { convert64ToURL, sortChart } from '../../helper';
import { fetchTopUsers } from '../../helper.fetching';
import { toast } from 'react-toastify';
import { MarginlessSimpleBarChart, SimpleBarChart, StackedBarChart } from '../charts/BarCharts';
import { PieChartWithCustomizedLabel, GapPieChart } from '../charts/PieCharts';
import StatRow from './statRow/StatRow';
import winIcon from '../../assets/MEDALS_ICON.png';
import percentIcon from '../../assets/PERCENT_ICON.png';
import gamesIcon from '../../assets/SWORDS_ICON.png';
import missIcon from '../../assets/CROSS_ICON.png';
import crownIcon from '../../assets/CROWN_ICON.png';
import skullIcon from '../../assets/SKULL_ICON.png';
import noPfp from '../../assets/USER_LOGGED_NO_PFP_ICON.png'
import unlogged from '../../assets/USER_UNLOGGED_ICON.png'
import UsersTable from './usersTable/UsersTable';
import OptionsButton from './optionsButton/OptionsButton';

const StatsScreen = () => {
    const [filterDescending, setFilterDescending] = useState(true);
    const [currentFilter, setCurrentFilter] = useState("wins");
    const [numberOfPlayers, setNumberOfPlayers] = useState(5);
    const [playersData, setPlayersData] = useState([]);
    const [keys, setKeys] = useState([]);
    const [chartIndex, setChartIndex] = useState(0);
    const { user, setUser } = useContext(UserContext);

    const icons = [gamesIcon, crownIcon, missIcon, winIcon, skullIcon, percentIcon];

    const charts = [
        <PieChartWithCustomizedLabel
            data={keys.map(key => ({
                name: key,
                value: key != "totalMatches" ? user?.[key] ?? 0 : Number(user?.wins) + Number(user?.losses),
            }))}
        />,
        <StackedBarChart
            data={[{
                name: user?.username,
                uv: Number(user?.losses),
                pv: Number(user?.wins),
                amt: Number(user?.totalMatches)
            }]}
        />,

        <MarginlessSimpleBarChart
            data={[{
                name: user?.username,
                uv: Number(user?.losses),
                pv: Number(user?.wins),
                amt: Number(user?.totalMatches)
            }]}
        />
    ];

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
        const winLosePercentage = (((Number(user?.wins) / Number(user?.losses)) / Number(user?.totalMatches)) * 100).toFixed(2);
        const totalMatches = user?.wordsGuessed + user?.wordsMissed + user?.wins + user?.losses;

        setValues([totalMatches, user?.wins, user?.losses, user?.wordsGuessed, user?.wordsMissed, `${isNaN(winLosePercentage) ? '0' : winLosePercentage}%`]);
        setKeys(["wins", "losses"]);

    }, [user]);

    return (
        <>
            <StatsHeader user={user} />

            <div className="screen">
                <div className="profileDiv">
                    <div className="pictureBox">
                        <img
                            src={!user ? unlogged : !user.profilePicture ? noPfp : (convert64ToURL(user?.profilePicture))}
                            height={250}
                            width={250}
                        />
                    </div>

                    <div className={`mainInfo ${!user ? 'blur' : ''}`}>
                        <p>{user?.username ?? "User0123456789"}</p>
                        <p>{user?.elo ?? '0000'}</p>
                    </div>

                    <div className="buttonWrapper">
                        <OptionsButton
                            options={["Pie Chart", "Stacked Chart", "Bar Chart"]}
                            setValue={setChartIndex}
                            active={user ? true : false}
                        />
                    </div>


                    {user ? (
                        <>
                            {charts[chartIndex]}
                        </>
                    ) : (
                        <>
                            <div className="blur">
                                <MarginlessSimpleBarChart
                                    data={[{
                                        name: "user",
                                        uv: 10,
                                        pv: 20,
                                        amt: 30
                                    }]}
                                />,
                            </div>
                        </>
                    )}


                </div>
                <div className="statsContainer">
                    <div className="topStatsDiv">
                        <div className="chartDiv">
                            <SimpleBarChart
                                data={
                                    sortChart(
                                        playersData.map(user => ({
                                            name: user.username,
                                            uv: Number(user.losses),
                                            pv: Number(user.wins),
                                            amt: Number(Number(user.losses) + Number(user.wins))
                                        })).sort((a, b) => a.pv - b.pv),
                                        currentFilter,
                                        filterDescending
                                    )
                                }
                            />
                        </div>
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
                            <UsersTable users={playersData} setCurrentFilter={setCurrentFilter} toggleDescending={toggleDescending} />

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