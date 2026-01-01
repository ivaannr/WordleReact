import './UsersTable.css'

const UsersTable = ({ users, setCurrentFilter }) => {

  const handleClick = (e) => {
    e.preventDefault();
    const filter = e.target.textContent.toString().toLowerCase();
    console.log(filter);
    setCurrentFilter(filter);
  };

  return (
    <table className='table'>
      <thead>
        <tr className='tr'>
          <th className='pad'>Username</th>
          <th className='pad' onClick={handleClick}>Total Matches</th>
          <th className='pad' onClick={handleClick}>Wins</th>
          <th className='pad' onClick={handleClick}>Losses</th>
          <th className='pad' onClick={handleClick}>ELO</th>
          <th className='pad' onClick={handleClick}>W/L %</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr className='tr' key={user.id}>
            <td className='pad'>{user.username}</td>
            <td className='pad'>{Number(user.wins) + Number(user.losses)}</td>
            <td className='pad'>{user.wins}</td>
            <td className='pad'>{user.losses}</td>
            <td className='pad'>{user?.ELO ?? 1000}</td>
            <td className="pad">
              {user.losses > 0
                ? `${((Number(user.wins) / Number(user.losses)) * 100).toFixed(2)}%`
                : "0%"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;