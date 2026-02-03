export default function Details({ card }) 
{
  if (!card) return null;

  return (
    <div className="details">
      <h2>Details</h2>
      <p><strong>Real Name:</strong> {card.realName}</p>
      <p><strong>Player Name:</strong> {card.playerName}</p>
      <p><strong>Asset:</strong> {card.asset}</p>
    </div>
  );
}
