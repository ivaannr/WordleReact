import './StatRow.css'

const StatRow = ( { icon, title, value } ) => {
    return (
        <div className="statRow">
            <img src={icon} height={25}></img>
            <span>
                <p>{title}</p>
            </span>
            <p className='p'>{value}</p>
        </div>
    );
};

export default StatRow;