import './StatRow.css'

const StatRow = ( {  icon, title, value } ) => {
    return (
        <div className="statRow">
            <img src={icon} height={25}></img>
            <p>{title}</p>
            <p>{value}</p>
        </div>
    );
};

export default StatRow;