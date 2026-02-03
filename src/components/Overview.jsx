import Card from "./Card";

export default function Overview({ cards, selected, onSelect }) {
  return (
    <div className="overview">
      {cards.map((card, index) => (
        <Card
          key={index}
          data={card}
          isSelected={selected === card}
          onClick={() => onSelect(card)}
        />
      ))}
    </div>
  );
}
