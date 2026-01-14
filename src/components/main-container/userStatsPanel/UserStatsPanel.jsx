import './UserStatsPanel.css'
import noPfpIcon from '../../../assets/USER_LOGGED_NO_PFP_ICON.png'
import { convert64ToURL } from '../../../helper';

const UserStatsPanel = ( { user = null, active = true } ) => {
    
    if (!active) { return (<></>); }
    
    return (
        
        <div className="statsPanel">
            <p className="bigP">• {user?.username ?? 'User0123456789'} •</p>
            <p>{user?.elo ?? '1000'} ELO</p>
            <img src={convert64ToURL(user?.profilePicture) ?? noPfpIcon} height={50} width={50}/>
        </div>
    );
};

export default UserStatsPanel;