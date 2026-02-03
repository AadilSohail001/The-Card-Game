export default function Card({ data, isSelected, onClick }) 
{
  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      title="Click to view details"
    >
      <p className="ellipsis">{data.realName}</p>
      <p className="ellipsis">{data.playerName}</p>
      <p className="ellipsis">{data.asset}</p>
    </div>
  );
}
